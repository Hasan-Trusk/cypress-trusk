const emailInputXpath = '[data-cy=email-input]'
const emailErrorMessageXpath = '[data-cy=email-caption]'
const passwordInputXpath = '[data-cy=password-input]'
const passwordErrorMessageXpath = '[data-cy=password-caption]'
const loginButtonSubmitXpath = '[data-cy=submit]'
const loginErrorMessageXpath = '[data-cy=login-error-message]'

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('truskApiBaseUrl')}/login`,
        body: {
            email: `${Cypress.env('b2bEmail')}`,
            password: `${Cypress.env('b2bPassword')}`,
        },
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => cy.setCookie('token', response.body.token))
    cy.visit(`${Cypress.env('truskBusinessBaseUrl')}`)
})

Cypress.Commands.add('openTruskBusinessLoginPage', () => {
    cy.visit(`${Cypress.env('truskBusinessBaseUrl')}/login`)
    cy.get('[data-cy=email-input]', { timeout: 10000 }).should('be.visible')
})

Cypress.Commands.add('wrongLogin', (email, password) => {
    cy.get(emailInputXpath).click().type(email)
    cy.get(passwordInputXpath).click().type(password)
    cy.get(loginButtonSubmitXpath).click()
    cy.get(loginErrorMessageXpath).should(
        'have.text',
        'Vos identifiants sont invalides.',
    )
})

Cypress.Commands.add('emptyLogin', () => {
    cy.get(loginButtonSubmitXpath).click()
    cy.get(emailErrorMessageXpath).should(
        'have.text',
        'Veuillez remplir ce champ.',
    )
    cy.get(passwordErrorMessageXpath).should(
        'have.text',
        'Veuillez remplir ce champ.',
    )
})

/* eslint-disable cypress/no-force */
const newDeliveryNavBarXpath = '//nav[@data-baseweb= \'header-navigation\']//div[@data-baseweb=\'typo-labelmedium\' and text()='

Cypress.Commands.add('checkNavBarElement', () => {
    const navBarElement = ['\'Nouvelle livraison\'', '\'Mes commandes\'', '\'Factures\'']
    for (let index = 0; index < navBarElement.length; index += 1) {
        cy.xpath(`${newDeliveryNavBarXpath}${navBarElement[index]}]`).click({ force: true })
        cy.xpath(`${newDeliveryNavBarXpath}${navBarElement[index]}]`).invoke('text').then((navBarTextElement) => {
            if (navBarTextElement === 'Nouvelle livraison') {
                cy.url().should('equal', `${Cypress.env('truskBusinessBaseUrl')}/fr`)
            } else if (navBarTextElement === 'Mes commandes') {
                cy.url().should('equal', `${Cypress.env('truskBusinessBaseUrl')}/fr/orders`)
            } else if (navBarTextElement === 'Factures') {
                cy.url().should('equal', `${Cypress.env('truskBusinessBaseUrl')}/fr/invoices`)
            } else {
                throw new Error('No such value')
            }
        })
    }
})

Cypress.Commands.add('clickOnNavBarElement', (elem) => {
    cy.xpath(`${newDeliveryNavBarXpath}${elem}]`).click({ force: true })
    cy.xpath(`${newDeliveryNavBarXpath}${elem}]`).invoke('text').then((textElement) => {
        if (textElement === 'Nouvelle livraison') {
            cy.on('url:changed', (url) => {
                expect(url).to.equal(`${Cypress.env('truskBusinessBaseUrl')}/fr`)
            })
        } else if (textElement === 'Mes commandes') {
            cy.on('url:changed', (url) => {
                expect(url).to.equal(`${Cypress.env('truskBusinessBaseUrl')}/fr/orders`)
            })
        } else if (textElement === 'Factures') {
            cy.on('url:changed', (url) => {
                cy.log('new url : ', url)
                expect(url).to.equal(`${Cypress.env('truskBusinessBaseUrl')}/fr/invoices`)
            })
        }
    })
})

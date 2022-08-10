import { DateTime } from 'luxon'

const myOrdersButtonXpath = '(//div[@data-baseweb=\'flex-grid\']//div[@data-baseweb=\'flex-grid-item\'])[2]//button'
const orderLineXpath = '//div[@data-baseweb=\'table-custom\']//div[@role=\'rowgroup\']//div[@role=\'row\']'
// const OrderNumberOnDetailPageOfOrderXpath = '//h2[contains(text(),\'Commande\')]'

Cypress.Commands.add('checkIfColumnTitleIsDisplayed', () => {
    // Create a dictionary with key = title and value = selector
    const obj = {
        Actions: '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'Actions\']',
        Date: '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'Date\']',
        Statut: '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'Statut\']',
        'N° de commandeNom du client': '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'N° de commande\']',
        'Référence Trusk': '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'Référence Trusk\']',
        'Prise en chargeCode postal': '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'Prise en charge\']',
        'LivraisonCode postal': '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'Livraison\']',
        'Prix (HT)': '//div[@data-baseweb=\'table-custom\']//div[@role=\'row\']//div[@role=\'gridcell\']//div[@data-baseweb=\'block\'][text() = \'Prix (HT)\']',
    }
    // create an array that contains keys from dictionary created above
    const objectKeys = Object.keys(obj)
    for (let i = 0; i < objectKeys.length; i += 1) {
        // fill const selector with value of each key from dictionary
        const selector = obj[objectKeys[i]]
        // invoke text jquery method on previous element and check if it is equal with dictionary key
        cy.xpath(selector).invoke('text').then((textOfSelector) => {
            expect(textOfSelector).to.equal(objectKeys[i])
        })
    }
})

Cypress.Commands.add('clickOnOrderButtonFromCard', () => {
    cy.xpath(myOrdersButtonXpath).click()
    cy.url().then((url) => {
        expect(url).to.equal(`${Cypress.env('truskBusinessBaseUrl')}/fr/orders`)
    })
})

Cypress.Commands.add('checkOrderLineElements', () => {
    const tomorrow = DateTime.local().plus({ days: 1 })
    const tomorrowDateFormat = tomorrow.setLocale('en-gb').toLocaleString()
    cy.xpath(`${orderLineXpath}`).each(($div) => {
        cy.wrap($div).find('div:nth-child(3)>div').then(($thirdCol) => {
            const textOfThirdCol = $thirdCol.text()
            expect(textOfThirdCol).to.equal(tomorrowDateFormat)
        })
        cy.wrap($div).find('div:nth-child(4)>div>div:nth-child(1)>div:nth-child(2)').then(($forthCol) => {
            const textOfForthCol = $forthCol.text()
            expect(textOfForthCol).to.equal('Validation en cours')
        })
    }).its('length').then((lineNumber) => {
        expect(lineNumber).to.be.greaterThan(1)
    })
})

Cypress.Commands.add('clickOnFirstOrderAmongList', () => {
    cy.xpath(`${orderLineXpath}`).first().click()
})

// Cypress.Commands.add('checkOrderDetailsPage', () => {
//     let splitedUrl df
//     cy.url().then((url) => {
//         splitedUrl = url.split(/[/=?]/)
//         expect(url).to.equal(`${Cypress.env('truskBusinessBaseUrl')}/fr/orders/detail?orderId=${splitedUrl[7]}`)
//         cy.xpath(packageNumberInputXpath).invoke('val').then((packageNumberValue) => {
//             expect(xhr.response.body.items[0].quantity.toString()).to.eq(packageNumberValue)
//         })
//     })
// })

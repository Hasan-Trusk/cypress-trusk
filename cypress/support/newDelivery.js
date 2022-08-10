/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable cypress/no-force */
import { DateTime } from 'luxon'
import { times } from 'lodash'
import 'cypress-wait-until'
import { expect } from 'chai'

const autocompleteListWrapperXPath = '//div[@data-baseweb=\'popover\']//ul[@role=\'listbox\']'
const startLocationAddressInputXPath = '(//div[@data-scroll-error=\'startLocationAddress\']//input)[1]'
const startLocationAddressDivValueXpath = '(//div[@data-scroll-error=\'startLocationAddress\']//div[@aria-selected=\'true\'])[1]'
const endLocationAddressInputXPath = '(//div[@data-scroll-error=\'endLocationAddress\']//input)[1]'
const endLocationAddressDivValueXpath = '(//div[@data-scroll-error=\'endLocationAddress\']//div[@aria-selected=\'true\'])[1]'
const startLocationFloorsInputXPath = '//input[@id=\'startLocationAddressFloorDropdownId\']'
const endLocationFloorsInputXPath = '//input[@id=\'endLocationAddressFloorDropdownId\']'
const startElevatorCheckBoxXPath = '//div[@data-scroll-error=\'startLocationAddress\']//label[@data-baseweb=\'checkbox\']//input[@type= \'checkbox\']'
const endElevatorCheckBoxXPath = '//div[@data-scroll-error=\'endLocationAddress\']//label[@data-baseweb=\'checkbox\']//input[@type= \'checkbox\']'
const startAdressBookMarkButtonXpath = '//div[@data-scroll-error=\'startLocationAddress\']//div[@data-baseweb=\'block\']//button[@data-baseweb=\'button\']'
const startAdressBookMarkToolTipXpath = '//div[@data-scroll-error=\'startLocationAddress\']//div[@data-baseweb=\'block\']//span[@aria-expanded=\'true\']'
const endAdressBookMarkButtonXpath = '//div[@data-scroll-error=\'endLocationAddress\']//div[@data-baseweb=\'block\']//button[@data-baseweb=\'button\']'
const endAdressBookMarkToolTipXpath = '//div[@data-scroll-error=\'endLocationAddress\']//div[@data-baseweb=\'block\']//span[@aria-expanded=\'true\']'
const deleteStartAdressXpath = '(//div[@data-scroll-error=\'startLocationAddress\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'select\']//*[contains(@title, \'Clear value\')])[1]'
const deleteEndAdressXpath = '(//div[@data-scroll-error=\'endLocationAddress\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'select\']//*[contains(@title, \'Clear value\')])[1]'
const packageWeightRadioButtonXpath = '//div[@data-scroll-error=\'packagesWeight\']//div[@data-baseweb=\'block\']//div[@role= \'radiogroup\']//input'
const packagesPackagingRadioButtonXpath = '//div[@data-scroll-error=\'packagesPackaging\']//div[@data-baseweb=\'block\']//div[@role= \'radiogroup\']//input'
const longestPackageRadioButtonXpath = '//div[@data-scroll-error=\'longestPackage\']//div[@data-baseweb=\'block\']//div[@role= \'radiogroup\']//input'
const highestPackageRadioButtonXpath = '//div[@data-scroll-error=\'highestPackage\']//div[@data-baseweb=\'block\']//div[@role= \'radiogroup\']//input'
const merchandisePackagesWeightInformationIconXpath = '//div[@data-scroll-error=\'packagesWeight\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'block\']//*[contains(@data-icon, \'info-circle\')]'
const merchandisePackageWeightToolTipIsExpandedXpath = '//div[@data-scroll-error="packagesWeight"]//div[@data-baseweb="block"]//span[@aria-expanded="true"]'
const merchandisePackagePackagingInformationIconXpath = '//div[@data-scroll-error=\'packagesPackaging\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'block\']//*[contains(@data-icon, \'info-circle\')]'
const merchandisePackagePackagingToolTipIsExpandedXpath = '//div[@data-scroll-error="packagesPackaging"]//div[@data-baseweb="block"]//span[@aria-expanded="true"]'
const merchandiseLongestPackageInformationIconXpath = '//div[@data-scroll-error=\'longestPackage\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'block\']//*[contains(@data-icon, \'info-circle\')]'
const merchandiseLongestPackageToolTipIsExpandedXpath = '//div[@data-scroll-error="longestPackage"]//div[@data-baseweb="block"]//span[@aria-expanded="true"]'
const merchandiseHighestPackageInformationIconXpath = '//div[@data-scroll-error=\'highestPackage\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'block\']//*[contains(@data-icon, \'info-circle\')]'
const merchandiseHighestPackageToolTipIsExpandedXpath = '//div[@data-scroll-error="highestPackage"]//div[@data-baseweb="block"]//span[@aria-expanded="true"]'
const merchandisePackagesCountInformationIconXpath = '//div[@data-scroll-error=\'packagesCount\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'block\']//*[contains(@data-icon, \'info-circle\')]'
const merchandisePackagesCountToolTipIsExpandedXpath = '//div[@data-scroll-error="packagesCount"]//div[@data-baseweb="block"]//span[@aria-expanded="true"]'
const detailsInformationIconXpath = '//div[@data-scroll-error=\'packagesDetails\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'block\']//*[contains(@data-icon, \'info-circle\')]'
const detailsToolTipIsExpandedXpath = '//div[@data-scroll-error="packagesDetails"]//div[@data-baseweb="block"]//span[@aria-expanded="true"]'
const packageOrderNumberInformationIconXpath = '//div[@data-scroll-error=\'packagesOrderNum\']//div[@data-baseweb=\'block\']//div[@data-baseweb=\'block\']//*[contains(@data-icon, \'info-circle\')]'
const packageOrderNumberToolTipIsExpandedXpath = '//div[@data-scroll-error="packagesOrderNum"]//div[@data-baseweb="block"]//span[@aria-expanded="true"]'
const slotDateInputXPath = '//div[@data-scroll-error=\'dateSlot\']//div[@data-baseweb=\'form-control-container\']//div[@data-baseweb=\'base-input\']//input[@aria-label=\'Select a date.\']'
const timeSlotCalendarXpath = '//div[@data-baseweb=\'popover\']//div[@data-baseweb=\'calendar\']'
const slotHourInputXPath = '//div[@data-scroll-error=\'dateSlot\']//div[@data-baseweb=\'form-control-container\']//div[@data-baseweb=\'select\']//input[@aria-autocomplete=\'list\']'
const hourSlotDropDownListXpath = '//div[@data-baseweb=\'popover\']//div[@role=\'listbox\']//ul[@role=\'listbox\']'
const deliveryDetailsTextareaXPath = '//textarea[@id=\'packagesDetailsTextArea\']'
const packageNumberInputXpath = '//input[@id=\'packagesCountInput\']'
const packageOrderNumberInputXpath = '//input[@id=\'packagesOrderNumInput\']'
const startContactNameInputXpath = '//input[@id=\'startContactInput\']'
const startContactPhoneNumberInputXpath = '//input[@id=\'startContactPhoneInput\']'
const endContactNameInputXpath = '//input[@id=\'endContactInput\']'
const endContactPhoneNumberInputXpath = '//input[@id=\'endContactPhoneInput\']'
const generalConditionsCheckXpath = '//div[@data-scroll-error=\'hasReadItems\']//div[@data-baseweb=\'block\']//label[@data-baseweb=\'checkbox\']//input'
const submitButtonXpath = '[data-cy=\'order-form\']>[data-baseweb=\'block\']>[data-baseweb=\'button\']'
const estimationPanelTitleXPath = '//p[@data-baseweb=\'typo-paragraphlarge\' and text()=\'Estimation\']'
const newDeliveryButtonXpath = '(//div[@data-baseweb=\'flex-grid\']//div[@data-baseweb=\'flex-grid-item\'])[1]//button'
const duplicateDeliveryButtonXpath = '(//div[@data-baseweb=\'flex-grid\']//div[@data-baseweb=\'flex-grid-item\'])[3]//button'
const createReturnOrderButtonXpath = '(//div[@data-baseweb=\'flex-grid\']//div[@data-baseweb=\'flex-grid-item\'])[4]//button'
const autocompleteListElementXPath = (textContent) => `${autocompleteListWrapperXPath}//div[text()='${textContent}']`
const floorsElementXpath = (floorNumber) => `${autocompleteListWrapperXPath}//div[text()='${floorNumber}']`

Cypress.Commands.add('fillStartAdress', (startAdressLocation, autoCompleteStartAdress) => {
    cy.xpath(startLocationAddressInputXPath).click().type(startAdressLocation)
    cy.xpath(autocompleteListElementXPath(autoCompleteStartAdress)).click()
})

Cypress.Commands.add('chooseFloorStartAdress', (startLocationFloor) => {
    cy.xpath(startLocationFloorsInputXPath).click()
    cy.xpath(floorsElementXpath(startLocationFloor)).click()
})
Cypress.Commands.add('checkStartAdressElevator', () => {
    // eslint-disable-next-line cypress/no-force
    cy.xpath(startElevatorCheckBoxXPath, { timeout: 10000 }).check({ force: true }).should('be.checked')
})

Cypress.Commands.add('fillEndAdress', (endAdressLocation, autoCompleteEndAdress) => {
    cy.xpath(endLocationAddressInputXPath).click().type(endAdressLocation)
    cy.xpath(autocompleteListElementXPath(autoCompleteEndAdress)).click()
})

Cypress.Commands.add('chooseFloorEndAdress', (endLocationFloor) => {
    cy.xpath(endLocationFloorsInputXPath).click().type('1')
    cy.xpath(floorsElementXpath(endLocationFloor)).click()
})
Cypress.Commands.add('checkEndAdressElevator', () => {
    // eslint-disable-next-line cypress/no-force
    cy.xpath(endElevatorCheckBoxXPath, { timeout: 10000 }).check({ force: true }).should('be.checked')
})

Cypress.Commands.add('mouseOverStartBookmarks', () => {
    // trigger permet de déclencher un evenement sur un élément
    cy.xpath(startAdressBookMarkButtonXpath).trigger('mouseover')
    // invoke permet d'appliquer une fonction de la lib jquery sur l'élèment ciblé
    cy.xpath(startAdressBookMarkToolTipXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('mouseOverEndBookmarks', () => {
    // trigger permet de déclencher un evenement sur un élément
    cy.xpath(endAdressBookMarkButtonXpath).trigger('mouseover')
    // invoke permet d'appliquer une fonctione sur l'élèment ciblé
    cy.xpath(endAdressBookMarkToolTipXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('addStartAdressToFavorite', () => {
    cy.xpath(startAdressBookMarkButtonXpath).click()
    cy.xpath(startAdressBookMarkButtonXpath).should('have.css', 'background-color').and('eq', 'rgb(255, 243, 0)')
})
Cypress.Commands.add('deleteStartAdressFromFavorite', () => {
    cy.xpath(startAdressBookMarkButtonXpath).click()
    cy.xpath(startAdressBookMarkButtonXpath).should('have.css', 'background-color').and('eq', 'rgb(5, 48, 255)')
})

Cypress.Commands.add('addEndAdressToFavorite', () => {
    cy.xpath(endAdressBookMarkButtonXpath).click()
    cy.xpath(endAdressBookMarkButtonXpath).should('have.css', 'background-color').and('eq', 'rgb(255, 243, 0)')
})

Cypress.Commands.add('deleteEndAdressFromFavorite', () => {
    cy.xpath(endAdressBookMarkButtonXpath).click()
    cy.xpath(endAdressBookMarkButtonXpath).should('have.css', 'background-color').and('eq', 'rgb(5, 48, 255)')
})

Cypress.Commands.add('emptyStartAdress', () => {
    cy.xpath(deleteStartAdressXpath).click()
    cy.xpath(startLocationAddressInputXPath).invoke('val').should('be.empty')
})

Cypress.Commands.add('emptyEndAdress', () => {
    cy.xpath(deleteEndAdressXpath).click()
    cy.xpath(endLocationAddressInputXPath).invoke('val').should('be.empty')
})

Cypress.Commands.add('selectPackageWeight', (packageWeight) => {
    const packageWeightData = ['<350', '350<x<650', '>=650']
    if (packageWeightData.includes(packageWeight)) {
        cy.xpath(packageWeightRadioButtonXpath).check(packageWeight, { force: true }).should('have.value', packageWeight)
    } else {
        throw new Error('You can put only three string values : \'<350\' OR \'350<x<650\' OR \'>=650\'')
    }
})

Cypress.Commands.add('selectPackagesPackaging', (packagePackaging) => {
    const packagePackagingData = ['not_pallet', 'pallet']
    if (packagePackagingData.includes(packagePackaging)) {
        cy.xpath(packagesPackagingRadioButtonXpath).check(packagePackaging, { force: true }).should('have.value', packagePackaging)
    } else {
        throw new Error('You can put only two string values : \'not_pallet\' OR \'pallet\'')
    }
})

Cypress.Commands.add('selectLongestPackage', (longestPackage) => {
    const longestPackageData = ['<2m', '2m<x<3m', '3m<x<4m']
    if (longestPackageData.includes(longestPackage)) {
        cy.xpath(longestPackageRadioButtonXpath).check(longestPackage, { force: true }).should('have.value', longestPackage)
    } else {
        throw new Error('You can put only three string values : \'<2m\' OR \'2m<x<3m\' OR \'3m<x<4m\'')
    }
})

Cypress.Commands.add('selectHighestPackage', (highestPackage) => {
    const highestPackageData = ['<1.4m', '1.4m<x<2m']
    if (highestPackageData.includes(highestPackage)) {
        cy.xpath(highestPackageRadioButtonXpath).check(highestPackage, { force: true }).should('have.value', highestPackage)
    } else {
        throw new Error('You can put only two string values : \'<1.4m\' OR \'1.4m<x<2m\'')
    }
})

Cypress.Commands.add('mouseOverOnInformationIconForPackageWeight', () => {
    cy.xpath(merchandisePackagesWeightInformationIconXpath, { timeout: 10000 }).trigger('mouseover', { force: true })
    cy.xpath(merchandisePackageWeightToolTipIsExpandedXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('mouseOverOnInformationIconForPackagePackaging', () => {
    cy.xpath(merchandisePackagePackagingInformationIconXpath, { timeout: 10000 }).trigger('mouseover', { force: true })
    cy.xpath(merchandisePackagePackagingToolTipIsExpandedXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('mouseOverOnInformationIconForLongestPackage', () => {
    cy.xpath(merchandiseLongestPackageInformationIconXpath, { timeout: 10000 }).trigger('mouseover', { force: true })
    cy.xpath(merchandiseLongestPackageToolTipIsExpandedXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('mouseOverOnInformationIconForHighestPackage', () => {
    cy.xpath(merchandiseHighestPackageInformationIconXpath, { timeout: 10000 }).trigger('mouseover', { force: true })
    cy.xpath(merchandiseHighestPackageToolTipIsExpandedXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('mouseOverOnInformationIconForPackagesCount', () => {
    cy.xpath(merchandisePackagesCountInformationIconXpath, { timeout: 10000 }).trigger('mouseover', { force: true })
    cy.xpath(merchandisePackagesCountToolTipIsExpandedXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('fillPackageNumber', (notNumericalValue, packageNumber) => {
    cy.xpath(packageNumberInputXpath).click().type(notNumericalValue).invoke('val')
        .then((isEmpty) => {
            expect(isEmpty).to.be.empty
        })
    cy.xpath(packageNumberInputXpath).click().type(packageNumber).invoke('val')
        .then((value) => {
            expect(Number.isNaN(value)).to.eq(false)
        })
})

Cypress.Commands.add('estimatePanelExist', () => {
    cy.intercept('POST', `${Cypress.env('truskPricerApiBaseUrl')}/price?withoutTraffic=true`).as('pricer')
    cy.wait('@pricer', { timeout: 60000 }).then((data) => {
        cy.log(JSON.stringify(data))
        expect(data.response.statusCode).to.eq(200)
        expect(data.response.body.steps[0].place).to.eq('ChIJOcVTiwRu5kcRTH3Z7JlLe80')
        expect(data.response.body.steps[1].place).to.eq('ChIJFeChc_1u5kcRiXgc2Wjo7EY')
    })
    cy.xpath(estimationPanelTitleXPath).invoke('text').then((textValue) => {
        expect(textValue).to.eq('Estimation')
    })
})
Cypress.Commands.add('chooseTimeSlot', () => {
    const tomorrow = DateTime.local().plus({ days: 1 })
    const tomorrowDateFormat = tomorrow.setLocale('en-gb').toLocaleString()
    times(5, () => {
        cy.xpath(slotDateInputXPath).trigger('mouseover').click({ force: true })
    })

    cy.xpath(timeSlotCalendarXpath).should('be.visible')
    cy.xpath(slotDateInputXPath).type(tomorrowDateFormat)
})

Cypress.Commands.add('chooseHourSlot', (hourSlot) => {
    cy.xpath(slotHourInputXPath).trigger('mouseover').click({ force: true })
    cy.xpath(`${hourSlotDropDownListXpath}//li`).should('be.visible').each(($li) => {
        if ($li.text() === hourSlot) {
            $li.click()
        }
    })
})

Cypress.Commands.add('fillDetails', (details) => {
    cy.xpath(deliveryDetailsTextareaXPath).click().type(details, { force: true })
})

Cypress.Commands.add('mouseOverOnInformationIconForDetails', () => {
    cy.xpath(detailsInformationIconXpath, { timeout: 10000 }).trigger('mouseover', { force: true })
    cy.xpath(detailsToolTipIsExpandedXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('fillOrderNumber', (orderNumber) => {
    cy.xpath(packageOrderNumberInputXpath).click().type(orderNumber, { force: true })
})

Cypress.Commands.add('mouseOverOnInformationIconForOrderNumber', () => {
    cy.xpath(packageOrderNumberInformationIconXpath, { timeout: 10000 }).trigger('mouseover', { force: true })
    cy.xpath(packageOrderNumberToolTipIsExpandedXpath).invoke('attr', 'aria-expanded').then((isExpanded) => {
        expect(isExpanded).to.equal('true')
    })
})

Cypress.Commands.add('fillStartContactName', (startName) => {
    cy.xpath(startContactNameInputXpath).click().type(startName)
})

Cypress.Commands.add('fillStartContactPhoneNumber', (notNumericalValue, startContactPhone) => {
    cy.xpath(startContactPhoneNumberInputXpath).click().type(notNumericalValue).invoke('val')
        .then((isEmpty) => {
            expect(isEmpty).to.be.empty
        })
    cy.xpath(startContactPhoneNumberInputXpath).click().type(startContactPhone).invoke('val')
        .then((value) => {
            expect(Number.isNaN(value)).to.eq(false)
        })
})

Cypress.Commands.add('fillEndContactName', (endName) => {
    cy.xpath(endContactNameInputXpath).click().type(endName)
})

Cypress.Commands.add('fillEndContactPhoneNumber', (notNumericalValue, endContactPhone) => {
    cy.xpath(endContactPhoneNumberInputXpath).click().type(notNumericalValue).invoke('val')
        .then((isEmpty) => {
            expect(isEmpty).to.be.empty
        })
    cy.xpath(endContactPhoneNumberInputXpath).click().type(endContactPhone).invoke('val')
        .then((value) => {
            expect(Number.isNaN(value)).to.eq(false)
        })
})
Cypress.Commands.add('conditionsAreChecked', () => {
    cy.xpath(generalConditionsCheckXpath).should('be.checked')
})
Cypress.Commands.add('checkGeneralConditions', () => {
    cy.xpath(generalConditionsCheckXpath).check({ force: true })
})

Cypress.Commands.add('submitDeliveryCreation', () => {
    cy.intercept('PUT', `${Cypress.env('truskApiBaseUrl')}/order`).as('orderIsCreated')
    cy.get(submitButtonXpath).focus().scrollIntoView().should('be.visible')
    cy.contains('Valider la commande', { timeout: 60000 }).click()
    cy.wait('@orderIsCreated', { timeout: 60000 }).then((data) => {
        expect(data.response.statusCode).to.eq(201)
        cy.xpath(startLocationAddressDivValueXpath).invoke('attr', 'value').then((startAdressValue) => {
            expect(startAdressValue).to.eq(data.response.body.startLocationPlaceId)
        })
        cy.xpath(endLocationAddressDivValueXpath).invoke('attr', 'value').then((endAdressValue) => {
            expect(endAdressValue).to.eq(data.response.body.endLocationPlaceId)
        })
        cy.xpath(deliveryDetailsTextareaXPath).invoke('val').then((detailsValue) => {
            expect(data.response.body.details).to.eq(detailsValue)
        })
        cy.xpath(packageNumberInputXpath).invoke('val').then((packageNumberValue) => {
            expect(data.response.body.items[0].quantity.toString()).to.eq(packageNumberValue)
        })
    })
})

Cypress.Commands.add('duplicateDelivery', () => {
    let currentURl
    cy.xpath(duplicateDeliveryButtonXpath).click()
    cy.url().then((url) => {
        // In order to split a string, i choosed regex. Following regex meant "split when you see the character / and = "
        // Split function return an array
        currentURl = url.split(/[/=]/)
        cy.intercept('GET', `${Cypress.env('truskApiBaseUrl')}/order/${currentURl[4]}`).as('getOrderById')
        cy.wait('@getOrderById', { timeout: 60000 }).then((xhr) => {
            cy.url().should('eq', `${Cypress.env('truskBusinessBaseUrl')}/fr?orderDuplicate=${xhr.response.body.id}`)
            expect(xhr.response.statusCode).to.eq(200)
            cy.xpath(startLocationAddressDivValueXpath).invoke('attr', 'value').then((startAdressValue) => {
                expect(startAdressValue).to.eq(xhr.response.body.startLocationPlaceId)
            })
            cy.xpath(endLocationAddressDivValueXpath).invoke('attr', 'value').then((endAdressValue) => {
                expect(endAdressValue).to.eq(xhr.response.body.endLocationPlaceId)
            })
            cy.xpath(startContactPhoneNumberInputXpath).invoke('val').then((startContactPhoneNumberValue) => {
                expect(xhr.response.body.startContact.phoneNumber).to.include(startContactPhoneNumberValue)
            })
            cy.xpath(endContactPhoneNumberInputXpath).invoke('val').then((endContactPhoneNumberValue) => {
                expect(xhr.response.body.endContact.phoneNumber).to.include(endContactPhoneNumberValue)
            })
        })
    })
})

Cypress.Commands.add('returnDelivery', () => {
    let currentURl
    cy.xpath(createReturnOrderButtonXpath).click()
    cy.url().then((url) => {
        currentURl = url.split(/[/=]/)
        cy.intercept('GET', `${Cypress.env('truskApiBaseUrl')}/order/${currentURl[4]}`).as('getOrderById2')
        cy.wait('@getOrderById2', { timeout: 60000 }).then((xhr) => {
            cy.url().should('eq', `${Cypress.env('truskBusinessBaseUrl')}/fr?orderReturn=${xhr.response.body.id}`)
            expect(xhr.response.statusCode).to.eq(200)
            cy.xpath(startLocationAddressDivValueXpath).invoke('attr', 'value').then((endAdressValue) => {
                expect(endAdressValue).to.eq(xhr.response.body.endLocationPlaceId)
            })
            cy.xpath(endLocationAddressDivValueXpath).invoke('attr', 'value').then((startAdressValue) => {
                expect(startAdressValue).to.eq(xhr.response.body.startLocationPlaceId)
            })
            cy.xpath(startContactPhoneNumberInputXpath).invoke('val').then((startContactPhoneNumberValue) => {
                expect(xhr.response.body.endContact.phoneNumber).to.include(startContactPhoneNumberValue)
            })
            cy.xpath(endContactPhoneNumberInputXpath).invoke('val').then((endContactPhoneNumberValue) => {
                expect(xhr.response.body.startContact.phoneNumber).to.include(endContactPhoneNumberValue)
            })
            cy.xpath(packageNumberInputXpath).invoke('val').then((packageNumberValue) => {
                expect(xhr.response.body.items[0].quantity.toString()).to.eq(packageNumberValue)
            })
        })
    })
})

Cypress.Commands.add('clickOnNewDeliveryFromCard', () => {
    cy.xpath(newDeliveryButtonXpath).click()
    cy.on('url:changed', (url) => {
        expect(url).to.equal(`${Cypress.env('truskBusinessBaseUrl')}/fr`)
    })
})

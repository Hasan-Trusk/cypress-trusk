/* eslint-disable cypress/no-unnecessary-waiting */
import { faker } from '@faker-js/faker'

describe('Trusk business automation', () => {
    // Variables permettant de stocker mes objets json
    let loginData
    let deliveryData
    let navBarData
    before(() => {
        // Permet de charger des fausses données créer via un fichier json passé en paramètre.
        // Je créer une variable loginData, je lui affecte mon objet json data

        cy.openTruskBusinessLoginPage()
        cy.fixture('loginFixtures').then((data) => {
            loginData = data
            return loginData
        })
        cy.fixture('newDelivery/newDeliveryFixtures').then((data) => {
            deliveryData = data
            return deliveryData
        })
        cy.fixture('navBar/navBarFixtures').then((data) => {
            navBarData = data
            return navBarData
        })
    })

    describe('Login feature', () => {
        it('User try to click on submit, without filling login form', () => {
            cy.emptyLogin()
        })
        it('User try to be logged on app by filling wrong credentials', () => {
            cy.wrongLogin(loginData.wrongEmail, loginData.wrongPassword)
        })
        it('User is logged on trusk business', () => {
            cy.login()
        })
    })
    describe('New delivery page', () => {
        describe('Error message', () => {
            it('Check error message on new delivery page', () => {
                cy.newDeliveryErrorMessage()
            })
        })
        describe('Fill section "Trajet" and check specifics behavior', () => {
            it('Fill start adress', () => {
                cy.fillStartAdress(deliveryData.startAdress, deliveryData.completeStartAdress)
            })
            it('Choose a floor for start adress', () => {
                cy.chooseFloorStartAdress(deliveryData.floors[4])
            })
            it('Check elevator option for start adress', () => {
                cy.checkStartAdressElevator()
            })
            it('Fill end adress', () => {
                cy.fillEndAdress(deliveryData.endAdress, deliveryData.completeEndAdress, deliveryData.floors[5])
            })
            it('Choose a floor for end adress', () => {
                cy.chooseFloorEndAdress(deliveryData.floors[4])
            })
            it('Check elevator option for end adress', () => {
                cy.checkEndAdressElevator()
            })
            it('Hover on start adress book marks icon', () => {
                cy.mouseOverStartBookmarks()
            })
            it('Hover on end adress book marks icon', () => {
                cy.mouseOverEndBookmarks()
            })
            it('Add the starting address to the favorites', () => {
                cy.addStartAdressToFavorite()
            })
            it('Delete the starting address from the favorites', () => {
                cy.deleteStartAdressFromFavorite()
            })

            it('Add the ending address to the favorites', () => {
                cy.addEndAdressToFavorite()
            })
            it('Delete the ending address from the favorites', () => {
                cy.deleteEndAdressFromFavorite()
            })
            it('Empty start adress and fill again start adress', () => {
                cy.emptyStartAdress()
                cy.fillStartAdress(deliveryData.startAdress, deliveryData.completeStartAdress)
            })
            it('Empty end adress and fill again end adress', () => {
                cy.emptyEndAdress()
                cy.fillEndAdress(deliveryData.endAdress, deliveryData.completeEndAdress, deliveryData.floors[7])
            })
        })
        describe('Fill section "Marchandise" and check specifics behavior', () => {
            it('Check packages weight', () => {
                cy.selectPackageWeight('350<x<650')
            })
            it('Check packages packaging', () => {
                cy.selectPackagesPackaging('not_pallet')
            })
            it('Check longest packages', () => {
                cy.selectLongestPackage('<2m')
            })
            it('Check highest packages', () => {
                cy.selectHighestPackage('<1.4m')
            })
            it('Fill packages number', () => {
                cy.fillPackageNumber(deliveryData.notNumericalData, faker.random.numeric())
            })
            it('Hover on packages weight information icon', () => {
                cy.mouseOverOnInformationIconForPackageWeight()
            })
            it('Hover on packages packaging information icon', () => {
                cy.mouseOverOnInformationIconForPackagePackaging()
            })
            it('Hover on longest package information icon', () => {
                cy.mouseOverOnInformationIconForLongestPackage()
            })
            it('Hover on highest package information icon', () => {
                cy.mouseOverOnInformationIconForHighestPackage()
            })
            it('Hover on package count information icon', () => {
                cy.mouseOverOnInformationIconForPackagesCount()
            })
        })
        describe('Fill section "Date" and check specifics behavior', () => {
            it('Check if estimate panel is displayed', () => {
                cy.estimatePanelExist()
            })
            it('Choose a time slots (date)', () => {
                cy.chooseTimeSlot()
            })
            it('Choose a hour slots (hours)', () => {
                cy.chooseHourSlot(deliveryData.slotHours[4])
            })
        })
        describe('Fill section "Details" and check specifics behavior', () => {
            it('Fill details text area', () => {
                cy.fillDetails(`${deliveryData.details}${faker.random.words(10)}`)
            })
            it('Hover on details information icon', () => {
                cy.mouseOverOnInformationIconForDetails()
            })
            it('Fill order number', () => {
                cy.fillOrderNumber(`${deliveryData.orderNumber}${faker.random.alphaNumeric(5)}`)
            })
            it('Hover on order number information icon', () => {
                cy.mouseOverOnInformationIconForOrderNumber()
            })
        })
        describe('Fill section "Contacts" and check specifics behavior', () => {
            it('Fill start contact name', () => {
                cy.fillStartContactName(faker.name.findName())
            })
            it('Fill start contact phone number', () => {
                cy.fillStartContactPhoneNumber(deliveryData.notNumericalData, `${deliveryData.firstTwoDigitPhoneNumber}${faker.random.numeric(8)}`)
            })
            it('Fill end contact name', () => {
                cy.fillEndContactName(faker.name.findName())
            })
            it('Fill end contact phone number', () => {
                cy.fillEndContactPhoneNumber(deliveryData.notNumericalData, `${deliveryData.firstTwoDigitFixNumber}${faker.random.numeric(8)}`)
            })
            it('Check if generals conditions are checked', () => {
                cy.conditionsAreChecked()
            })
            it('Submit new quote creation', () => {
                cy.submitDeliveryCreation()
            })
        })
        describe('Duplicate delivery page', () => {
            it('Click on duplicate button and check specifics behavior', () => {
                cy.duplicateDelivery()
            })
            it('Fill packages number for duplicate delivery', () => {
                cy.fillPackageNumber(deliveryData.notNumericalData, faker.random.numeric())
            })
            it('Check if estimate panel is displayed for duplicate delivery', () => {
                cy.estimatePanelExist()
            })
            it('Choose a time slots (date) for duplicate delivery', { defaultCommandTimeout: 20000 }, () => {
                cy.chooseTimeSlot()
            })
            it('Choose a hour slots (hours) for duplicate delivery', () => {
                cy.chooseHourSlot(deliveryData.slotHours[13])
            })
            it('Check generals conditions for duplicate delivery', () => {
                cy.checkGeneralConditions()
            })
            it('Submit duplicate delivery ', () => {
                cy.submitDeliveryCreation()
            })
        })
        describe('Return delivery page', () => {
            it('Click on return order button and check specifics behavior', () => {
                cy.returnDelivery()
            })
            it('Submit return delivery ', () => {
                cy.submitDeliveryCreation()
            })
            it('Click on new delivery button from card ', () => {
                cy.clickOnNewDeliveryFromCard()
            })
        })
    })
    describe('nav bar element', () => {
        it('Check if all element on nav bar are working well', () => {
            cy.checkNavBarElement()
        })
    })
    describe('Order page', () => {
        describe('Nav bar element : Order', () => {
            it('Click on order element on navbar', () => {
                cy.clickOnNavBarElement(navBarData.navBarElement.order)
            })
        })
        describe('Order tab', () => {
            it('Check if column titles from order tab are displayed', () => {
                cy.checkIfColumnTitleIsDisplayed()
            })
            it('Check filter tomorrow', () => {
                cy.selectDateFilter('tomorrow')
            })
            it('Check order line element', () => {
                cy.checkOrderLineElements()
            })
            it('click on first order among list', () => {
                cy.clickOnFirstOrderAmongList()
            })
            // it.only('Check details page of order', () => {
            //     cy.checkOrderDetailsPage()
            // })
        })
    })
})

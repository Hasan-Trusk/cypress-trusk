const submitButtonXPath = '//button[@data-baseweb=\'button\' and text()=\'Valider la commande\']'
const emptyStartAdressErrorMessageXpath = '//div[@data-scroll-error=\'startLocationAddress\']//div[@data-baseweb=\'form-control-caption\']'
const emptyEndAdressErrorMessageXpath = '//div[@data-scroll-error=\'endLocationAddress\']//div[@data-baseweb=\'form-control-caption\']'
const emptyPackageWeightErrorMessageXpath = '//form[@data-cy=\'order-form\']//div[@data-baseweb=\'block\']//div[@data-scroll-error=\'packagesWeight\']//div[@data-baseweb=\'form-control-caption\']'
const emptyPackageCountErrorMessageXpath = '//form[@data-cy=\'order-form\']//div[@data-baseweb=\'block\']//div[@data-scroll-error=\'packagesCount\']//div[@data-baseweb=\'form-control-caption\']'
const packageDetailErrorMessageXpath = '//div[@data-baseweb=\'block\']//form[@data-cy=\'order-form\']//div[@data-baseweb=\'block\']//div[@data-scroll-error=\'packagesDetails\']//div[@data-baseweb=\'form-control-caption\']'
const pickupContactNameErrorMessageXpath = '//div[@data-baseweb=\'block\']//form[@data-cy=\'order-form\']//div[@data-baseweb=\'block\']//div[@data-scroll-error=\'startContactName\']//div[@data-baseweb=\'form-control-caption\']'
const pickupContactNumberErrorMessageXpath = '//div[@data-baseweb=\'block\']//form[@data-cy=\'order-form\']//div[@data-baseweb=\'block\']//div[@data-scroll-error=\'startContactPhone\']//div[@data-baseweb=\'form-control-caption\']'
const dropoffContactNameErrorMessageXpath = '//div[@data-baseweb=\'block\']//form[@data-cy=\'order-form\']//div[@data-baseweb=\'block\']//div[@data-scroll-error=\'endContactName\']//div[@data-baseweb=\'form-control-caption\']'
const dropoffContactNumberErrorMessageXpath = '//div[@data-baseweb=\'block\']//form[@data-cy=\'order-form\']//div[@data-baseweb=\'block\']//div[@data-scroll-error=\'endContactPhone\']//div[@data-baseweb=\'form-control-caption\']'

Cypress.Commands.add('newDeliveryErrorMessage', () => {
    cy.xpath(submitButtonXPath).click()
    cy.xpath(emptyStartAdressErrorMessageXpath).invoke('text').should('eq', 'L\'adresse de chargement est obligatoire.')
    cy.xpath(emptyEndAdressErrorMessageXpath).invoke('text').should('eq', 'L\'adresse de livraison est obligatoire.')
    cy.xpath(emptyPackageWeightErrorMessageXpath).invoke('text').should('eq', 'Veuillez remplir les informations sur la marchandise à transporter.')
    cy.xpath(emptyPackageCountErrorMessageXpath).invoke('text').should('eq', 'Veuillez indiquer le nombre de colis à transporter.')
    cy.xpath(packageDetailErrorMessageXpath).invoke('text').should('eq', 'Veuillez indiquer les détails de la course.')
    cy.xpath(pickupContactNameErrorMessageXpath).invoke('text').should('eq', 'Veuillez indiquer le nom complet du contact au lieu de prise en charge.')
    cy.xpath(pickupContactNumberErrorMessageXpath).invoke('text').should('eq', 'Veuillez indiquer le numéro de téléphone du contact au lieu de prise en charge.')
    cy.xpath(dropoffContactNameErrorMessageXpath).invoke('text').should('eq', 'Veuillez indiquer le nom complet du contact au lieu de livraison.')
    cy.xpath(dropoffContactNumberErrorMessageXpath).invoke('text').should('eq', 'Veuillez indiquer le numéro de téléphone du contact au lieu de livraison.')
})

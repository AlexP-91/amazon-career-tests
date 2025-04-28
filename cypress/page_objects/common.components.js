class CommonComponents {
    get pageHeader() {return cy.get('#pageHeader')}
    get submitBtn() {return cy.get('button[type="submit"]')}
}

export default CommonComponents;
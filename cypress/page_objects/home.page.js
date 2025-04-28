class HomePage {
    get userMenuBtn() {return cy.get('#dropdownMenuLink')}
    get myProfileOption() {return cy.contains('.dropdown-item', 'My profile')}
    get title() {return cy.get('.find-jobs')}
    get serchInpt() {return cy.get('#homepage #search_typeahead')}
    get locationInpt() {return cy.get('#homepage #location-typeahead')}
    get locationDropdownOptions() {return cy.get('[role="option"]')}
    get searchBtn() {return cy.get('#search-button')}
}
export default new HomePage();
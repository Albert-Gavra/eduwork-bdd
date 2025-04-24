const SEARCHFORM = '#searchTerm';
const SEARCHRESULT = 'were found for the query: ';

class SearchForm {
    static fillSearch (input) {
        cy.get(SEARCHFORM).type(input).type('{enter}');
    }

    static checkSearch (result) {
        cy.contains(SEARCHRESULT).should('include.text', result);
    }
}

export default SearchForm;
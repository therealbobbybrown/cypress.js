describe('Проверка QA Studio в гугл', function () {
   it('Проверка поиска QA Studio', function () {
   	    cy.visit('https://www.google.com');
        cy.get('input:first').should('have.class', 'gLFyf').type('QA Studio').type('{enter}');
        cy.contains('QA Studio');
    })
})


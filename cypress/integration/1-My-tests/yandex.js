describe('Яндекс, Котята', function () {
   it('Поисковая выдача, слово Котята', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('Котята').type('{enter}');
        cy.window('Картинки по запросу котята');
    })
})
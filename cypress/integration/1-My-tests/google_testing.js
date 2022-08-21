describe('Тестирование поиска google, пагинация', function () {
     it('Вводим в поисковую строку запрос', function () {
        cy.visit('https://google.com/');
        cy.get("input[type='text']").type('Если не чай и не кофе, то что').type('{enter}');
        cy.get(':nth-child(3) > .fl').click();
        cy.get(':nth-child(4) > .fl').click();
        cy.get(':nth-child(5) > .fl').click();
        cy.visit('https://google.com')
        cy.get("input[type='text']").type('ЭТО В ПРИНЦИПЕ И ВСЁ!');
        })
})
describe('Тестируем Adesk', function () {
   it('Сёрфинг, почти регистрация', function () {
        cy.visit('https://adesk.ru/');
        cy.get('.navbar-nav > :nth-child(2) > .nav-link').click();
        cy.get('.navbar-nav > :nth-child(3) > .nav-link').click();
        cy.get('.d-flex > noindex > .btn').click();
        cy.get('#roistat-lh-popup-iframe');
        cy.contains('Регистрация в Adesk');
        cy.get('#name').type('Иван');
        cy.get('#email').type('mail@mail.ru');
        cy.get('#phone').type('89101234567');
        cy.get(':nth-child(6) > .btn');
    })
})
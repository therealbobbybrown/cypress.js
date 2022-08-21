describe('Staya, логин', function () {
   it('Авторизация с валидными данными', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('bookings@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('2MA8wgRjEkYcg8v');
        cy.get('.auth-form__submit').type('{enter}');
        cy.window('Мои заказы');
    })
})

describe('Тестирование yuriqa.ru', function () {

    it('Проверка ссылочек, кнопочек и переход в email', function () {
        cy.visit('https://yuriqa.ru');
        cy.get('.photo').click();
        cy.get('.button').type('{enter}');
        cy.get('[href="https://t.me/yuriustinov"]');
        cy.get('[href="https://wa.me/qr/HVXTSMNJGKYOL1"]');
        cy.get('[href="https://vk.com/yuriustinov"]');
        cy.get('[href="https://www.linkedin.com/in/yuriustinov/"]');
        cy.get('[href="https://github.com/therealbobbybrown"]');
        cy.get('[href="https://miro.com/app/board/uXjVOpU_LkA=/?share_link_id=517020870651"]');
        cy.get('[href="mailto:bookings@mail.ru"]').click();
    })
})
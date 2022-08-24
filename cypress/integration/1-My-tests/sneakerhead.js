describe('Кеды, доставка', function () {
   it('Поиск товара, добавление в корзину', function () {
        cy.visit('https://sneakerhead.ru/');
        cy.get('.main-nav__item--sale > .main-nav__link').click();
        cy.get(':nth-child(1) > .catalog-filters__box-content > .catalog-filters__list > :nth-child(3) > .catalog-filters__link').click();
        cy.get(':nth-child(6) > .product-card > .product-card__title > .product-card__link > .product-card__link-area').click();
        cy.get('.is-visible > :nth-child(5) > .product-sizes__button').click();
        cy.get('.product-add-to-cart-button__add').click();
        cy.contains('Товар добавлен в корзину');
        cy.visit('https://sneakerhead.ru/checkout');
        cy.contains('В корзине 1 товар');


    })
});
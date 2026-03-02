import { PageElement, By } from '@serenity-js/web';

export const InventoryPage = {
  addBackpack: () =>
    PageElement.located(By.id('add-to-cart-sauce-labs-backpack')),

  addBikeLight: () =>
    PageElement.located(By.id('add-to-cart-sauce-labs-bike-light')),

  cartIcon: () =>
    PageElement.located(By.css('.shopping_cart_link'))
};
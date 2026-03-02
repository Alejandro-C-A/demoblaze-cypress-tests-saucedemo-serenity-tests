import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { CartPage } from '../ui/CartPage';
import { CheckoutPage } from '../ui/CheckoutPage';

export const Checkout = () =>
  Task.where(`#actor completes checkout`,
    Click.on(CartPage.checkoutButton()),
    Enter.theValue('Alejandro').into(CheckoutPage.firstName()),
    Enter.theValue('Cueca').into(CheckoutPage.lastName()),
    Enter.theValue('110821').into(CheckoutPage.postalCode()),
    Click.on(CheckoutPage.continueButton()),
    Click.on(CheckoutPage.finishButton()),
  );
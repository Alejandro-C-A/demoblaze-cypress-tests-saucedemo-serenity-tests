import { test } from '@serenity-js/playwright-test';
import { actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Ensure, equals } from '@serenity-js/assertions';
import { Navigate, Text } from '@serenity-js/web';

import { Login } from '../tasks/Login';
import { AddProducts } from '../tasks/AddProducts';
import { Checkout } from '../tasks/Checkout';
import { ClosePopup } from '../tasks/ClosePopup';
import { ConfirmationPage } from '../ui/ConfirmationPage';

test('E2E Purchase Flow - SauceDemo', async ({ browser }) => {

  const actor = actorCalled('user')
    .whoCan(BrowseTheWebWithPlaywright.using(browser));

  await actor.attemptsTo(
    Navigate.to('https://www.saucedemo.com/'),
    Login(),
    //ClosePopup.ifPresent(),
    AddProducts(),
    Checkout(),
    Ensure.that(
      Text.of(ConfirmationPage.confirmationMessage()),
      equals('Thank you for your order!')
    )
  );
});
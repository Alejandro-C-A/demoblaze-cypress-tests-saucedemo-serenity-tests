import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { InventoryPage } from '../ui/InventoryPage';

export const AddProducts = () =>
  Task.where(`#actor adds two products`,
    Click.on(InventoryPage.addBackpack()),
    Click.on(InventoryPage.addBikeLight()),
    Click.on(InventoryPage.cartIcon()),
  );
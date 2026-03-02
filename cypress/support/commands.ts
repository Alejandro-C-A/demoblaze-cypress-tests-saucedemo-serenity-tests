// cypress/support/commands.ts

declare global {
  namespace Cypress {
    interface Chainable {
      signup(user: { username: string; password: string }): Chainable<any>;
      login(user: { username: string; password: string }): Chainable<any>;
    }
  }
}

Cypress.Commands.add("signup", (user) => {
  return cy.request("POST", "/signup", user);
});

Cypress.Commands.add("login", (user) => {
  return cy.request("POST", "/login", user);
});

export {};

  
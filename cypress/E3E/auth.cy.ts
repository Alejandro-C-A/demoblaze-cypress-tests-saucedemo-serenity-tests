/// <reference types="cypress" />

describe("Demoblaze Auth API Tests", () => {
  const newUser = {
    username: "testUser_" + Date.now(),
    password: "Password123!",
  };

  const existingUser = {
    username: "existingUser",
    password: "Password123!",
  };

  it("✅ Signup - create a new user", () => {
    cy.signup(newUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("msg", "Sign up successful.");
    });
  });

  it("❌ Signup - attempt to create an existing user", () => {
    cy.signup(existingUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("msg", "This user already exist.");
    });
  });

  it("✅ Login - correct username and password", () => {
    cy.login(existingUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("authToken");
    });
  });

  it("❌ Login - incorrect username or password", () => {
    cy.login({ username: "wrongUser", password: "wrongPass" }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("errorMessage", "Wrong password.");
    });
  });
});

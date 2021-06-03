// https://docs.cypress.io/api/introduction/api.html

describe("Scenario 1", () => {
  it("Checks for wrong email & password", () => {
    cy.visit("/login");
    cy.get("#email").type("email@doesnot.exist");
    cy.get("#password").type("wrongpassword");
    cy.get("#login-btn").click();
    cy.contains("p", "Your email and/or your password are incorrect");
  });
});

describe("Scenario 2", () => {
  it("Checks for correct email & wrong password", () => {
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("wrongpassword");
    cy.get("#login-btn").click();
    cy.contains("p", "Your email and/or your password are incorrect");
  });
});

describe("Scenario 3", () => {
  it("Checks for correct email & password", () => {
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("12345678");
    cy.get("#login-btn").click();
    cy.contains("h2", "Welcome to mohamed@instabug.com");
  });
});

describe("Scenario 4", () => {
  it("Checks for wrong email format", () => {
    cy.visit("/login");
    cy.get("#email").type("dddd").blur();
    cy.contains("p", "Enter a valid email address.");
    cy.get("#errors-email").should("have.css", "color", "rgb(242, 66, 32)");
    cy.get("#email").should("have.css", "border-color", "rgb(242, 66, 32)");
  });
});

describe("Extra Checks", () => {
  it("Checks for wrong email, password notes and errors spans", () => {
    cy.visit("/login");
    cy.get("#email").type("email@doesnot.exist");
    cy.get("#password").type("email");
    cy.get("#login-btn").should("be.disabled"); // because password.length is < 8
    cy.contains("p", "Your email and/or your password are incorrect").should(
      "not.exist"
    ); // because user can't click on login
    cy.contains("p", "Password must be 8 characters or more");
    cy.contains(
      "p",
      "Note: The password must contain at least 1 uppercase letters and one number and shouldn’t contain the email address name (the part that came before the @)"
    );
    cy.contains("h2", "Welcome to mohamed@instabug.com").should("not.exist");
  });
  it("Checks for no notes for password field", () => {
    cy.visit("/login");
    cy.get("#email").type("email@doesnot.exist");
    cy.get("#password").type("wrongpassword1K"); // contains 1 Uppercase letter & one letter and doesn't contain email name
    cy.get("#login-btn").click();
    cy.contains("p", "Your email and/or your password are incorrect");
    cy.contains("h2", "Welcome to mohamed@instabug.com").should("not.exist");
    cy.contains(
      "p",
      "Note: The password must contain at least 1 uppercase letters and one number and shouldn’t contain the email address name (the part that came before the @)"
    ).should("not.exist");
  });
  it("Checks for logging out", () => {
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("12345678");
    cy.get("#login-btn").click();
    cy.contains("h2", "Welcome to mohamed@instabug.com");
    cy.url().should("include", "/welcome");
    cy.get("#logout-btn").click();
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#login-btn").should("exist");
  });
  it("Checks for redirections", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
    cy.visit("/welcome");
    cy.url().should("include", "/login"); // redirect to login when user is not authenticated
    cy.visit("/wrong-url");
    cy.url().should("include", "/404");
    cy.visit("/login");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("12345678");
    cy.get("#login-btn").click();
    cy.url().should("include", "/welcome");
    cy.visit("/login");
    cy.url().should("include", "/welcome"); // redirect to welcome when user is authenticated
  });
});

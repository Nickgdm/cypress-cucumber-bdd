import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
    cy.visit("login.html");
});

When("informo o e-mail {string}", (email) => {
    cy.get("#email").clear().type(email);
});

When("informo a senha {string}", (senha) => {
    cy.get("#password").clear().type(senha);
});

When("clico no botão Entrar", () => {
    cy.get("#login-btn").click();
});

Then("devo ser redirecionado para a página inicial", () => {
    cy.url().should("include", "dashboard");
});

Then("devo visualizar a mensagem {string}", (mensagem) => {
    cy.get("#alert-container").should("contain", mensagem);
});
import "@testing-library/cypress/add-commands"
import { authenticator } from "otplib"

Cypress.Commands.add("login", () => {
    cy.get("input#username")
        .clear()
        .type(Cypress.env("USERNAME"))

    cy.get("input#password")
        .clear()
        .type(Cypress.env("PASSWORD"), {log: false})
            
    cy.get("input#kc-login").click()
        
    cy.get("input#otp")
        .clear()
        .type(authenticator.generate(Cypress.env("OTP_SECRET")), {log: false})
        
    cy.get("input#kc-login").click()
})
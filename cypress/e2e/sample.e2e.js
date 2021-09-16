/// <reference types="cypress" />



describe("Sample test", () => {
    it("works as intended", () => {
        cy.clearCookies()
        cy.visit("/")

        cy.login()
    })
})
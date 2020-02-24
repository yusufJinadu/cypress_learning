///// <reference types="Cypress" />
describe("first test", function(){
    it("greeting", function(){
        cy.visit("/")
        cy.get("#txtUsername").type("Admin")
        cy.get('#txtPassword').type('admin123')
        cy.get("#btnLogin").click()
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/index.php/dashboard")
    })
})

context("second test", function(){
    specify("greeting", function(){
        console.log("hello")
        cy.log("hello cypress")
    })
})
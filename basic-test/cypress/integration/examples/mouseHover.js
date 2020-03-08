///<reference types="Cypress" />
describe('My First Test suite', function(){
    it('my first test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force : true})
        cy.url().should('include','top')
  
    })

})
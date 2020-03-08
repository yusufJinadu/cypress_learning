///<reference types="Cypress" />
describe('My First Test suite', function(){
    it('my first test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('.mouse-hover-content').invoke('show')
        cy.get('#opentab').then((el) => {
            const url = el.prop('href')
            cy.visit(url)
        })
  
    })

})
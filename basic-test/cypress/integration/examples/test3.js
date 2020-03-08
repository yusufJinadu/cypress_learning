///<reference types="Cypress" />
describe('My second Test suite', function(){
    it('my first 2 test case', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el,index,$list) => {
            if($el.text() === 'India'){
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button
        cy.get('[value = "radio2"]').check().should('be.checked')

        //alerts and popups
        //cypress auto accepts popups
        cy.get('[value="Confirm"]').click()
        cy.get('[value="Alert"]').click()
        // uisng event listeners
        cy.on('window:confirm', (str) => {
            expect(str ).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.on('window:alert', (str) => {
            expect(str ).to.equal('Hello , share this practice page and share your knowledge')
        })

        //child tabs
        cy.get('#opentab').invoke('removeAttr' , 'target').click()
       cy.url().should('include', 'rahulshettyacademy.com')
        // broswer navigation
        cy.go('back')
    })
})

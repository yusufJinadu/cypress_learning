describe("handling alerts", function(){
    beforeEach(function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    it("Alert type", function(){
        cy.on("window:alert", function(alertText){
            expect(alertText).eq("I am a JS Alert")
        })
        cy.contains("Click for JS Alert").click()
    })   

    it("confirm type Alert", function(){
        cy.on("window:confirm", function(confirmText){
            return false
        })
        cy.contains("Click for JS Confirm").click()
    })  

    it("prompt type Alert", function(){
        cy.window().then(function($win){
            cy.stub($win, "prompt").returns("hello")
            cy.contains("Click for JS Prompt").click()
        })
       
    })
})
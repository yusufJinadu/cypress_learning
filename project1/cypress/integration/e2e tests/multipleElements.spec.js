describe("Interact with multiple elements",function(){
    it("playing with multiple elements",function(){
        //login
        cy.visit("https://www.saucedemo.com/index.html")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get(".btn_action").click()

        //interacting

        cy.get(".inventory_item_name").should("have.length", 6)
        .should("contain.text", "Sauce Labs Backpack")
        .each(function($el,index,$listOfElement){
           if($el.text() == "Sauce Labs Backpack" ){
               $el.click()
           }
        })

    })
})
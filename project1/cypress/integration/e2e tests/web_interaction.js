describe("Async", function(){
    it("cypress commands are async", function(){
        cy.visit("https://the-internet.herokuapp.com/")
        cy.get("h1").then((heading) => {
            var headerString = heading.text()
            cy.log(headerString)
            console.log("im inside")
        })
    })
    console.log("im outside")
})

describe("Async", function(){
    beforeEach(function(){
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
    })
    it("dropdown",function(){
        cy.get("#dropdown").select("Option 1")
        cy.get("#dropdown").children().first().then(function(dropdown){
            cy.log(dropdown.text())
        })
    })

    it.only("checkbox",function(){
        cy.get(":checkbox").first().check()
        cy.get("[type=checkbox]:eq(1)").should("be.checked")
    
    })
   
})
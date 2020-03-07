describe("user can see a menu", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001");  
    })
    it("display product order", () => {
        cy.get("list of products").should("contain", "Send Order")
        
    })
})

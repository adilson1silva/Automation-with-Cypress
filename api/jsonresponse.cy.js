///<reference types = "Cypress"/>

describe('Parcing json API', () => {
    it('teste json', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
            }).then((Response)=>{
            expect(Response.status).to.equal(200)
            expect(Response.body[0].id).to.equal(1)
            expect(Response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            expect(Response.body[0].price).to.equal(109.95)
            expect(Response.body[0].rating.rate).to.equal(3.9)
        })
    });
    
});
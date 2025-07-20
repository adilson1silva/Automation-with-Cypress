/// <reference types = 'Cypress'/>

it('Passing quere paramiters', () => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/produtos'
    }).then((Response)=>{
        expect(Response.status).to.equal(200)
        expect(Response.body.quantidade).to.equal(2)
        expect(Response.body.produtos).has.length(2)

        expect(Response.body.produtos[0]).have.property('nome', 'Logitech MX Vertical')
        expect(Response.body.produtos[0]).has.property('preco', 470)
        expect(Response.body.produtos[0]).have.property('descricao', 'Mouse')
    })
});
/*
Criar 3 request diferente
1º POST - Para ter o token de acesso
2º POST - ordiar o pedido
3º - GET - Ver se o pedido está OK
*/



/// <reference types = "Cypress"/>


describe('API testing', () => {

    let authToken = null;

    before("creating access token",() => {
    
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type': 'application/json'
            },
            body: {
                clientName: "ABC",
                clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
                }
        }).then((response)=>{
            authToken = response.body.accessToken;
    
        })
    });

    it("creating new order",() => {
    
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
            },
            body: {
                "bookId": 1,
                "customerName": "xyzabc"
                
                }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.created).to.equal(true)
        })
        
    });

    it('fitching the orders', () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
                    },
            cookies:{
                'cookiesName': 'Mycookies'
                    }

        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body).has.length(1)
        })
    });
});

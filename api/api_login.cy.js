/// <reference types = 'Cypress'/>

describe('API - Functional login test', () => {
    it('You must log in successfully', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/Login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
              }
        }).then((Response)=>{
            expect(Response.status).to.equal(200)
            expect(Response.body.message).to.equal('Login realizado com sucesso')
        })
    });

    it('Must validate incorrect password', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste1"
              },failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(401)
            expect(Response.body.message).to.equal('Email e/ou senha inválidos')
        })
        
    });

    
    it('aprouch 1', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body:{
                "nome": "Flno da Salva",
                "email": "ftrqano@qa.com.br",
                "password": "teste",
                "administrador": "true"
              }
        }).then((Response)=>{
            expect(Response.status).to.equal(201)
            expect(Response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    });
    

    it('Approuch 2 - Dynamic generating json object', () => {
        const requestbody={
            nome: Math.random().toString(5).substring(2),
            email: Math.random().toString(5).substring(2) + '@gmail.com.br',
            password: "teste",
            administrador: "true"
          }

          cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: requestbody
          }).then((Response)=>{
            expect(Response.status).to.equal(201)
            expect(Response.body.message).to.equal('Cadastro realizado com sucesso')

          })
    });

    it.only('Appronch 3 - fixtures', () => {
       
        cy.fixture('example').then((data)=>{
            const requestbody=data;

            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/usuarios',
                body: requestbody
            }).then((Response)=>{
                expect(Response.status).to.equal(201)
                expect(Response.body.message).to.equal('Cadastro realizado com sucesso')
            })
        })
        
    });

});
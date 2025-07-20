/// <reference types = 'cypress'/>

describe('Teste 1',() => {
    it('Teste 1.1',() =>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.page).to.equal(1)
            expect(response.body.per_page).to.equal(6)
            expect(response.body.total).to.equal(12)

            const dados1 = response.body.data[0]

            expect(dados1.email).to.eq('george.bluth@reqres.in')
            expect(dados1.id).to.eq(1)
            expect(dados1.first_name).to.eq('George')
            expect(dados1.last_name).to.eq('Bluth')
        })
    })
})
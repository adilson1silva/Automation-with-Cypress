/// <reference types = 'cypress' />

describe('1 - chamar a API inteira e fazer o teste',() => {
    const apiKey = '39613c35b85b938fd40e2fe22f3297d7'
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
    it('1.1 Testar todos os andpoints',() => {
        const lat = 15.1201
        const lon = -23.6052
        cy.request({
            method: 'GET',
            url: `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`
        }).then((response) =>{
            expect(response.status).to.equal(200) // Verificar o status
            expect(response.body).to.have.property('coord')
            expect(response.body.coord).to.have.property('lon')
            expect(response.body.coord).to.have.property('lat')
            expect(response.body).to.have.property('weather')
            expect(response.body).to.have.property('wind')
            expect(response.body).to.have.property('clouds')
        })
    })

    it('1.2 - Testar com endpoints errados',() => {
        const lat = 1000
        const lon = 1000

        cy.request({
            method: 'GET',
            url: `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eq('wrong latitude')
        })
    })
})

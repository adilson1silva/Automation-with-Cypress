/// <reference types = 'cypress'/>

describe('Teste de Api 2',() =>{

    const APIKEY = "39613c35b85b938fd40e2fe22f3297d7"
    const ulr = "https://pro.openweathermap.org/data/2.5/forecast/hourly"

    it('Primeiros testes',() =>{
        lat = 60
        lon = 10
        cy.request({
            method: 'GET',
            ulr: `${url}lat=${lat}&lon=${lon}&appid=${APIKEY}`
        })
    })
})
const needle = require('needle')
const endpoint = "https://movie-quote-api.herokuapp.com/v1/shows/"

needle('get', endpoint)
        .then((response)=>{
            return response.body
        })
        .then((mapas)=>{
                mapas.forEach(element => {
                    console.log(element.slug)
                    console.log('-----------------')
                });
        })
        .catch((error)=>{
            console.log(error)
        })
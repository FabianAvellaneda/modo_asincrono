const request = require('request')

const url = "https://lucifer-quotes.vercel.app/api/quotes"

let r = request(url, {json: true}, function(error, response, body ){
    const films = response.body
    films.forEach(element => {
        console.log(`Autores: ${element.author}`)
        console.log('----------------')
    });
})
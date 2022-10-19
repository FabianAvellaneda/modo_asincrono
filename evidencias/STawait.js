const axios = require('axios')

const endpoint = "https://strangerthings-quotes.vercel.app/api/quotes"

let config = {
    url: endpoint,
    method: 'get'
}

const f = async ()=>{
    try{
        let response = await axios(config)
        exito(response.data)
    }catch(error){
        fallo(error)
    }
}
const exito = (response)=>{
    const frases = response
    frases.forEach(element => {
        console.log(`Frase: ${element.quote}`)
        console.log('----------------')
    })
}
const fallo = (status)=>{
        if(h.status === 200){
            exito(h.responseText)
        }
        else{
            fallo(h.status)
        }
    }
f()

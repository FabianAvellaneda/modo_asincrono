const needle = require('needle')
const endpoint = "https://animechan.vercel.app/api/random"

const f = async ()=>{
    try{
        const response = await needle('get',endpoint)
        console.log (response.body.anime)
    }catch(error){
        fallo(error)
    }
}

const exito = (response)=>{
    const animes = response
    animes.forEach(element => {
        console.log(`animes: ${element.name}`)
        console.log('----------------')
    })
}
const fallo = (status)=>{
       console.log(status)
    }

f()
const needle = require('needle')
const endpoint = "https://restcountries.com/v3.1/all:"

const f = async ()=>{
    try{
        const response = await needle('get',endpoint)
        response.body.forEach(pais =>{
            console.log(pais.name.common)
            console.log('------------')
        })
    }catch(error){
        fallo(error)
    }
}

const exito = (response)=>{
    const universidades = response
    universidades.forEach(element => {
        console.log(`Universidades: ${element.name}`)
        console.log('----------------')
    })
}
const fallo = (status)=>{
       console.log(status)
    }

f()
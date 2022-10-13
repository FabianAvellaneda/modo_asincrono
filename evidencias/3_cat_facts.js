const needle = require('needle')
const endpoint = "https://cat-fact.herokuapp.com/facts"

const f = async ()=>{
    try{
        const response = await needle('get',endpoint)
        response.body.forEach(cat =>{
            console.log(cat)
            console.log('------------')
        })
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
const needle = require('needle')
const endpoint = "https://cat-fact.herokuapp.com/facts"

const f = async ()=>{
    try{
        const response = await needle('get',endpoint)
        response.body.forEach(cat =>{
            console.log(cat.text)
            console.log('------------')
        })
    }catch(error){
        fallo(error)
    }
}

const exito = (response)=>{
    const cats = response
    cats.forEach(element => {
        console.log(`cats: ${element.name}`)
        console.log('----------------')
    })
}
const fallo = (status)=>{
       console.log(status)
    }

f()
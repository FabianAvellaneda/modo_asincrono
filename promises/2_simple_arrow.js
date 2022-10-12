const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"

//funcion para conectar a una api a modo asincrono
const get_data = (endpoint)=>{
//definir la pronesa:
let promise = new Promise((resolve, rejected)=>{
    //1. CREAR EL OBJETO xmlhttp:
    const h = new xmlHttpRequest()
    //2. abrir la conexion a la API
    h.open('get', endpoint)
    //3. enviar la request a server(API)
    h.send()
    //4. tratar los datos de la response
    h.onload = ()=>{
        if(h.status === 200){
            resolve(h.responseText)
        }
        else{
            rejected(h.status)
        }
}
})
return promise
}

//funcion callback: exito
const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('----------------')
    });
    
}
//funcion callback: fallo
const fallo = (status)=>{
    if(h.status === 200){
        exito(h.responseText)
    }
    else{
        fallo(h.status)
    }
}

//invocar la funcion 
get_data(url).then((data)=>{
exito(data)
})
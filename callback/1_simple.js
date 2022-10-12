const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"

//funcion para conectar a una api a modo asincrono
function get_data(endpoint, exito, fallo){
//1. CREAR EL OBJETO xmlhttp:
const h = new xmlHttpRequest()
//2. abrir la conexion a la API
h.open('get', endpoint)
//3. enviar la request a server(API)
h.send()
//4. tratar los datos de la response
h.onload = function(){
    exito(h.responseText)
}

}

//funcion callback: exito
function exito(response){
    const tipos = JSON.parse(response).results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('----------------')
    });
    
}
//funcion callback: fallo
function fallo(status){
    console.log(status)
}

//invocar la funcion 
get_data(url, exito, fallo)
//Aula sobre módulos 
// Para carregar um modulo, você usa a função require, que é específica do node
// O require importa tudo que foi importado com module.exports = {}
// Não é preciso escrever a extensão do arquivo 

var somaFunc = require('./somar')
var subFunc = require('./sub')
var multFunc = require('./mult')
var divFunc = require('./div')


//console.log(somaFunc(5,4)) -> 9 - Pois o somaFunc é 

//Executando todos os módulos:

console.log(somaFunc(5,5) , subFunc(5,5) , multFunc(5,5) , divFunc(5,5))

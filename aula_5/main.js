//Nessa aula aprenderemos sobre o módulo HTTP presente no node, o Victor Lima fala que é bem fraquinho então
//Por isso utilizam frameworks, mas nessa aula utilizaremos a forma tradicional, normalmente utilizam o express.

var http = require('http')

http.createServer(function(req, res){
    //O res manda respostas pro usuário 
    res.end('Hello, World!')
}).listen(8080)

console.log('O servidor está funcionando') 
//Aula 10 - Como exibir arquivos HTML usando o express

const express = require('express')
const app = express()

app.get('/', function(req, res){
    // Em vez de usar res.send('mensagem') para enviar algo, utilizamos res.sendFile para mandar um arquivo
    //dirname = local da nossa aplicação
    res.sendFile(__dirname + '/html/index.html')

})

//ESSA NÃO SERÁ A MANEIRA PARA EXIBIR APLICAÇÕES EM HTML QUE VAMOS UTILIZAR
//Usaremos uma template engine

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html')
})



app.listen(8081, function(){
    console.log('Servidor rodando na porta 8081')
})
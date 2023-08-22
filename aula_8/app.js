//Aula 08, nessa aula o assunto é parâmetros

//Faremos algo tipo localhost:8081/ola/victor -> olá victor


const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Seja Bem Vindo ao meu app!')
})

app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre')
})

app.get('/blog', function(req,res){
    res.send('Bem-vindo ao meu blog')
})

//para criar um parâmetro se usa dois pontos
//Ele só vai entrar em ola se tiver o :nome
//Só pode chamar a função send uma única vez
app.get('/ola/:nome/:Faculdade/:cor', function(req, res){
    res.send('<h1>Ola ' + req.params.nome + '</h1>' + '<h2>Sua faculdade é '+ req.params.Faculdade + '</h2>' + '<h3>Sua cor favorita é: '+ req.params.cor + '</h3>'); 
})



app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081/')
});

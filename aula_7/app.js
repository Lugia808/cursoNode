//Aula sobre rotas
//É uma boa prática utilziar o const, pois possibilita uma nova inserção de valor na variável

const express = require('express');
const app = express();
//Para aparecer algo no servidor precisamos fazer isso através de uma função de callback 
//Função de callback: Função que é executada sempre que algum evento acontece 



//A mensagem cannot GET aparece, pois não há nenhuma rota definida

//Rota: Caminho para a aplicação




app.get('/', function(req, res){
    res.send('Seja Bem Vindo ao meu app!')
})
//Como criar um caminho na aplicação, por exemplo http://localhost:8081/sobre
app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre')
})

app.get('/blog', function(req,res){
    res.send('Bem-vindo ao meu blog')
})

app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081/')
}); // Essa função tem que ser a última SEMPRE
//localhost:porta



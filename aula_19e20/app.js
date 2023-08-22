//AULA SOBRE HANDLEBARS - é uma template engine- Handlebars da estrutura ao HTML - Consegue exibir dados do backend no HTML
// por exemplo podemos inserir variaveis do backend no html
//npm install --save express-handlebars 

//20 - O usuário vai conseguir cadastrar posts e vai conseguir ver e deletar posts


//O método GET envia os dados pela URL


const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize"); 

//Config
  // Template Engine
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
// Criar pasta views (exatamente assim)
//Conexão com o banco de dados mysql

const sequelize = new Sequelize("teste", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
})
//Rotas

app.get('/cad', function(req, res){
    res.render('Formulario')
} )

app.post('/add', function(req, res){ //Lembre-se de usar o método post quando for usar formulários POSTs
  res.send('Formulário recebido')
})


app.listen(8081, function () {
  console.log("O servidor está rodando na porta 8081");
});

//Aula 21 - Sobre body-parser -> pega itens de formulário
//O bodyParser usa os nomes dos arquivos

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Sequelize = require("sequelize"); 

//Config
  // Template Engine
  app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
// Criar pasta views (exatamente assim)

//Body-parser:
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
  //Pegando dados com bodyParser
  res.send('Texto: ' + req.body.titulo + ' Conteudo: ' + req.body.conteudo)
})


app.listen(8081, function () {
  console.log("O servidor está rodando na porta 8081");
});

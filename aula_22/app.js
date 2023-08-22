 const express = require('express')
 const app = express();
 const handlebars = require('express-handlebars');
 const bodyParser = require('body-parser');

  // Config
    // TemplateEngine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json);
    //Rotas

    app.get('/', function(req, res){
        res.send('pegando')
    })

app.listen(8081, function(){
    console.log('Servidor rodando na porta 8081')
})

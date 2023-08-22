//Como criar um model -- Uma referencia na sua tabela dentro de sua tabela
//da para criar tabelas sem usar uma linha de SQL

const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
})

//Postagem

const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING //limitado
    },
    conteudo: {
        type: Sequelize.TEXT //Caracteres ilimitados
    }
})

//Registrando uma nova postagem:
/*
postagem.create({
    titulo: 'bibibibobobo',
    conteudo: 'bababababababababbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
})*/
//CUIDADO AO USAR O NODEMON COM POIS ELE PODE DUPLICAR AS INSERÇÕES


const usuario = sequelize.define('usuarios', {
    nome: {
         type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

})

//usuario.sync({force: true})


//Usuários
//Como criar um banco de dados apartir do node

const Sequelize = require('sequelize')

/*const sequelize = new Sequelize('{nome do banco}', '{usuario}', '{senha}', {
    host: 'localhost',
    dialect: 'mysql'
})*/

const sequelize = new Sequelize('teste', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

//then é uma função que acontece quando algum evento acontece sucesso = then, falha = catch

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha ao se conectar' + erro)
})


const Sequelize = require('sequelize')
//Configuração do banco de dados
const sequelize = new Sequelize('blog_postagens', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
  })

  module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
  }
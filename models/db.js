//Criando conexão e exportando
const Sequelize = require("sequelize");

const sequelize = new Sequelize('celke', 'rodrigoferreira', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
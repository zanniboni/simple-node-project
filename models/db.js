//Instanciado sequelize
    const Sequelize = require('sequelize')

//Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('postapp', 'root', 'admin', {
        host: "localhost",
        dialect: "mysql"
    });

//Exportado módulos de definição de banco de dados
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
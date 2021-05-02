//Instanciado sequelize
const Sequelize = require('sequelize');
//Determinado conexão
const sequelize = new Sequelize('teste', 'root', 'admin', {
    host: "localhost",
    dialect: "mysql"
});

//Verifica se a conexão ocorreu com sucesso através de try e catch
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});

//Criação de tabela pelo sequelize
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// ------------- Sincronizar o model 'Postagem' com o MYSQL (Irá criar a tabela caso não exista) 
// ------------- Postagem.sync({force: true}); // Se o sync for executado mais de uma vez a tabela é recriada e as inf. são perdidas

// ----- Inserir registro através do modelo 'Postagem' - Irá executar um insert através do SQL
// Postagem.create({
//     titulo: "TITULO QUALQUER",
//     conteudo: "Loren ipsum"
// })

//Criado modelo de tabela usuários pelo SEQUELIZE
const Usuario = sequelize.define('usuarios', {
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

// ------------- Sincronizar o model 'Usuario' com o MYSQL (Irá criar a tabela caso não exista)
// ------------- Usuario.sync({force: true}); 

// ------- Inserir registro através do modelo 'Usuario' - Irá executar um insert através do SQL
// Usuario.create({
//     nome: "Vinicius",
//     sobrenome: "Chagas",
//     idade: 21,
//     email: "viny.zanchagas@gmail.com"
// })
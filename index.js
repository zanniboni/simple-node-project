const express = require('express')
const app = express()

//Utilizando o express-handlebars (É um template engine semelhante ao ReactJS)
//O handlebars interage com os elementos do HTML
const handlebars = require('express-handlebars')

//Instanciando o body-parser (Está depreciado) -- É utilizado o express 
//const bodyParser = require('body-parser')

//Instanciado sequelize
const Sequelize = require('sequelize')


//Config 
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Body Parser / Substituido por express
        app.use(express.urlencoded({ extended: true}))
        app.use(express.json()) 
    //Conexão com o banco de dados MySQL
        const sequelize = new Sequelize('teste', 'root', 'admin', {
            host: "localhost",
            dialect: "mysql"
        });


// Rotas
    app.get('/cad' , (req , res)=>{
    
       res.render('formulario')
    
    })
    app.post('/add' , (req , res)=>{
       res.send('Texto: ' + req.body.titulo + " Conteudo: " + req.body.conteudo)
    
    })

//Função listen para deixar servidor online
app.listen(8081, function(){
    console.log("Servidor rodando")
});
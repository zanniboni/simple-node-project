const express = require('express')
const app = express()

//Utilizando o express-handlebars (É um template engine semelhante ao ReactJS)
//O handlebars interage com os elementos do HTML
const handlebars = require('express-handlebars')

//Instanciando o body-parser (Está depreciado) -- É utilizado o express 
//const bodyParser = require('body-parser')

const Post = require('./models/Posts')

//Config 
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Body Parser / Substituido por express
        app.use(express.urlencoded({ extended: true}))
        app.use(express.json()) 

// Rotas

    app.get('/' , (req , res)=>{
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad' , (req , res)=>{
    
       res.render('formulario')
    
    })
    app.post('/add' , (req , res)=>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Erro ao criar post: " + erro)
        })
       
    })

    app.get('/deletar/:id' , (req , res)=>{
    
       Post.destroy({where: {'id': req.params.id}}).then(function(){
           res.send("Postagem deletada com sucesso!")
       }).catch(function(erro){
           res.send("Essa postagem não existe!")
       })
    
    })

    
//Função listen para deixar servidor online
app.listen(8081, function(){
    console.log("Servidor rodando")
});
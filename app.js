/////// A variável soma, recebe a função do módulo "sum.js"
// var sum = require("./sum.js");
// console.log("Hello world - " + sum(1, 2));

/////// Demonstração de inicialização de um servidor HTTP com Node
// var http = require('http');
// http.createServer(function(req, res){
//     res.end("Olá!");
// }).listen(8081);

// console.log("O servidor rodando");


//Criado função para chamar o Express
const express = require('express');
const app = express();

//Rota para a página inicial
app.get("/", function(req, res){
    res.send("Olá!");
});

//Rota para a página sobre
app.get("/sobre", function(req, res){
    res.send("Pagina sobre");
})


//Rota utilizando utilizando passagem de parâmetros
app.get("/ola/:cargo/:nome", function(req, res){
    //É possivel acessar os parametros da requisição
    res.send("Nome: " + req.params.nome + " Cargo:" + req.params.cargo);
})
//Função listen para deixar servidor online
app.listen(8081, function(){
    console.log("Servidor rodando");
});

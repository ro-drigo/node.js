//Chamando o express
const express = require("express");

//Instanciando função do express
const app = express();

//Indicar página que quer abrir
app.get("/", function(req, res){
    //send nos dá uma mensagem
    res.send("Gerenciador Financeiro");
});

app.get("/blog", function(req, res){
    res.send("Página do blog");
});

app.get("/sobre-empresa", function(req, res){
    res.send("Página sobre-empresa");
});

app.get("/contato", function(req, res){
    res.send("Página de contato");
});

//Iniciando servidor
app.listen(8080);
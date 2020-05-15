//Chamando o express
const express = require("express");

//Instanciando função do express
const app = express();

//Indicar página que quer abrir (o __dirname é necessário para pegar o caminho absoluto)
app.get("/", function(req, res){
    //send nos dá uma mensagem
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/blog", function(req, res){
    res.send("Página do blog");
});

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/contato", function(req, res){
    res.send("Página de contato");
});

//Iniciando servidor
app.listen(8080);
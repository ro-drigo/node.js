//Chamando o express
const express = require("express");

//Instanciando função do express
const app = express();

//Conexão com BD MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rodrigoferreira',
    password: '123456',
    database: 'celke'
});

//Verificando se a conexão está funcionando
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

//Select feito para testar a conexão
connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log('Erro ao realizar a consulta.');
    }
});

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
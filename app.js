//Chamando o express
const express = require("express");

//Instanciando função do express
const app = express();

//Conexão com BD MySQL
const mysql = require("mysql");

//A partir do MySQL 8 apresenta erro ao utilizar o usuário root para conexão
//Necessário criar novo usuário
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
    }else{
        console.log('conectado');
    }
  });


//Editando registro com node
  connection.query("UPDATE users SET nome = 'Cesar' WHERE id = 1", function(err, result){
    if(!err){
        console.log("Usuario editado com sucesso");
    }else{
        console.log("Erro ao editar usuario" + err);
    }
});



//Iniciando servidor
app.listen(8080);
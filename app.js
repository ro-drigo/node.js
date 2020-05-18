//importando as libs necessárias
const express = require('express');
const app = express();
const handlebars = require("express-handlebars");


//Carregando handlebars com express
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//rotas
app.get('/add-pagamento', function(req, res){
  res.render("add-pagamento");
});

app.get('/pagamento', function(req, res){
  res.render('pagamento');
});



//Iniciando servidor
app.listen(8080);
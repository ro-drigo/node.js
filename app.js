//importando as libs necessárias
const express = require('express');
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
//importando modulo para registrar
const pagamento = require("./models/Pagamento");

//Carregando handlebars com express
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Usando o bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas
app.get('/cad-pagamento', function(req, res){
  res.render("cad-pagamento");
});

app.get('/pagamento', function(req, res){
  res.render('pagamento');
});

//Criando rota para cadastrar pagamento
app.post('/add-pagamento', function(req, res){
    pagamento.create({
      nome: req.body.nome,
      valor: req.body.valor
    }).then(function(){
      res.redirect("/pagamento")
    }).catch(function(erro){
      res.send("Erro: pagamento não cadastrado" + erro)
    })
  //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>"); 
});

//Iniciando servidor
app.listen(8080);
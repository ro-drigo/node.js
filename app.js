//importando as libs necessárias
const express = require('express');
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
//importando moment para formatar data
const moment = require('moment');
//importando modulo para registrar
const Pagamento = require("./models/Pagamento");

//Carregando handlebars com express
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  helpers: {
    formatDate: (date) => {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}))
app.set('view engine', 'handlebars')

//Usando o bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas
app.get('/cad-pagamento', function(req, res){
  res.render("cad-pagamento");
});

app.get('/pagamento', function(req, res){
  //enviando informações para pagina pagamento
  //Se quisermos mostrar em ordem decrescente, adicionamos {order: [['id', 'ASC']]} como parametro do findAll
  Pagamento.findAll().then(documents => {
    const context = {

      pagamentos: documents.map(document => {
        return {
          id: document.id,
          nome: document.nome,
          valor: document.valor,
          createdAt: document.createdAt
        }
      })
    }

    res.render('pagamento', {
        pagamentos: context.pagamentos
    })
  })
})


//Criando rota para cadastrar pagamento
app.post('/add-pagamento', function(req, res){
    Pagamento.create({
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
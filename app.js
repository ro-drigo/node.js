//importando o sequelize
const Sequelize = require('sequelize');

//Criando conexão
const sequelize = new Sequelize('celke', 'rodrigoferreira', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

//Testando conexão
sequelize.authenticate().then(function(){
      console.log("Conexão realizada com sucesso");
}).catch(function(err){
      console.log('Erro ao realizar conexão: ' + err)
});

//Criando tabela
const Pagamentos = sequelize.define('pagamentos', {
  // Model attributes are defined here
  nome: {
    type: Sequelize.STRING,
  },
  valor: {
    type: Sequelize.DOUBLE
  }
  // Other model options go here
});

//Criar a tabela
//Pagamentos.sync({force: true});

//Inserindo dados na tabela
Pagamentos.create({
  nome: "Energia",
  valor: 220
})





//Inserindo na tabela o pagamento

const db = require('./db');

const Pagamento = db.sequelize.define('pagamento', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

//Criando de fato a tabela
//Pagamento.sync({force: true});

module.exports = Pagamento;
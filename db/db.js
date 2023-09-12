
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('skateshop','root','root',{
    host:'localhost',
    dialect: 'mysql'
});

sequelize.authenticate() 
.then(function(){ 
    console.log('Conexão realizada com sucesso')
})
.catch(function(){ 
    console.log('ERRO: não foi possivel realzar a conexão')
});

module.exports = sequelize; 

        
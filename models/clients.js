'use strict'

const { model, DataTypes, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
   class Clients extends Model { }

   Clients.init({

      cpf: DataTypes.BIGINT,
      nome_cliente: DataTypes.STRING(50),
      telefone: DataTypes.BIGINT,
      email: DataTypes.STRING(60),
      cidade: DataTypes.STRING(30),
      endereco: DataTypes.STRING(50),
      bairro: DataTypes.STRING(30),
      cep: DataTypes.BIGINT,
      complemento: DataTypes.STRING(25),
      estado: DataTypes.STRING(2),
      senha: DataTypes.STRING(8)
   },
      {
         sequelize,
         modelName: 'clients',
         timestamps: false
      });

   return Clients;


};
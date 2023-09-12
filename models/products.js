'use strict'

const sequelize = require("sequelize")

const { Model, DataTypes } = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Products extends Model { }

    Products.init({
        categoria: DataTypes.STRING(30),

        nome_produto: DataTypes.STRING(30),

        valor: DataTypes.DECIMAL(6,2),

        descricao: DataTypes.STRING(300),

        imagem: DataTypes.STRING(60),
    },
        {
            sequelize,
            modelName: 'products',
            timestamps: false
        });
    return Products
}
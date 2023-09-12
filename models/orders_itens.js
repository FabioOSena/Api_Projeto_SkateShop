'use strict'

const sequelize = require("sequelize")

const { Model, DataTypes } = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Orders_itens extends Model { }

    Orders_itens.init({
        quantidade: DataTypes.BIGINT,

        valor_parcial: DataTypes.DECIMAL(6,2),

        id_produto: DataTypes.SMALLINT,

        id_pedido: DataTypes.BIGINT,
    },
        {
            sequelize,
            modelName: 'orders_itens',
            timestamps: false
        });
    return Orders_itens
}
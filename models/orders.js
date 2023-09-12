'use strict'

const sequelize = require("sequelize")

const { Model, DataTypes } = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Orders extends Model { }

    Orders.init({
        valor_total: DataTypes.DECIMAL(6,2),

        data_pedido: DataTypes.DATE,

        quantidade: DataTypes.INTEGER,

        id_cliente: DataTypes.SMALLINT,
    },
        {
            sequelize,
            modelName: 'orders',
            timestamps: false
        });
    return Orders
}
'use strict'

const { Model, DataTypes } = require('sequelize');
const deliveries = require('../routes/deliveriesRoute');

const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Deliveries extends Model{}
    Deliveries.init({
        status: DataTypes.STRING(20),
        id_pedido:DataTypes.BIGINT,
        id_trasportadora:DataTypes.SMALLINT,
        frete:DataTypes.DECIMAL(6,2)
    },
    {
        sequelize,
        modelName:'deliveries',
        timestamps: false
    })
    return Deliveries
}
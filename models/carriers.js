'use strict'

const sequelize = require("sequelize")

const { Model, DataTypes } = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Carriers extends Model { }

    Carriers.init({
        nome_trasportadora: DataTypes.STRING(50),

        responsavel: DataTypes.STRING(30),

        id_estado: DataTypes.SMALLINT,

        telefone: DataTypes.BIGINT,
    },
        {
            sequelize,
            modelName: 'carriers',
            timestamps: false
        });
    return Carriers
}
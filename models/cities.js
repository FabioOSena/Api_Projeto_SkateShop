'use strict'

const sequelize = require('sequelize');
const { Model, DataTypes } = require
    ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cities extends Model { }

    Cities.init({

        nome_cidade: DataTypes.STRING(50),
        id_estado: DataTypes.SMALLINT,
    },
        {
            sequelize,
            modelName: 'cities',
            timestamps: false
        });
    return Cities
}
'use strict'

const { Model, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    class Logins extends Model {}

    Logins.init({
        email: DataTypes.STRING(60),
        senha: DataTypes.STRING(8),
        clienteId : DataTypes.SMALLINT
    },
        {
            sequelize,
            modelName: 'logins',
            timestamps: false
        });

        return Logins

}
const sequelize = require("sequelize")

const { Model, DataTypes } = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class States extends Model {}
    States.init({
        nome_estado: DataTypes.STRING(30)
    },
        {
            sequelize,
            modelName:'States',
            timestamps: false
        });
    return States
}
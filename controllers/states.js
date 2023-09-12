const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const States = require('../models/states');
const states = require('../models/states');


module.exports = {
    async getAll(req, res) {
        const states = await States(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(states)
    },
    async get(req, res) {
        const states = await States(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(states)
    },
    async create(req, res) {
        const states = await States(sequelize, Sequelize.DataTypes).create({

        nome_estado:req.body.nome_estado

        })
        res.status(201).send({
            message: "Estado cadastrado com sucesso. Boaaa"
        })
    },
    async update(req, res) {
        const states = await States(sequelize, Sequelize.DataTypes).update({
            nome_estado:req.body.nome_estado
        },
            {
                where: { id: req.params.id }
            });
        res.status(200).send({
            message: ('Estado atualizado com sucesso')
        })
    },
    async delete(req, res) {
        const states = await States(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "Estado excluído com sucesso."
        })
    }
}
const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Carriers = require('../models/carriers');


module.exports = {
    async getAll(req, res) {
        const carriers = await Carriers(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(carriers)
    },
    async get(req, res) {
        const carriers = await Carriers(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(carriers)
    },
    async create(req, res) {
        const carriers = await Carriers(sequelize, Sequelize.DataTypes).create({

            nome_trasportadora: req.body.nome_trasportadora,
            responsavel: req.body.responsavel,
            id_estado: req.body.id_estado,
            telefone: req.telefone,
        })
        res.status(200).send({
            message: ('Trasportadora cadastrada com sucesso')
        })
    },
    async update(req, res) {
        const carriers = await Carriers(sequelize, Sequelize.DataTypes).update({
            nome_trasportadora: req.body.nome_trasportadora,
            responsavel: req.body.responsavel,
            id_estado: req.body.id_estado,
            telefone: req.body.telefone
        },
            {
                where: { id: req.params.id }
            });
        res.status(200).send({
            message: ('Trasportadora atualizado com sucesso')
        })
    },
    async delete(req, res) {
        await Carriers(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        },
        )
        res.status(200).send({
            message: ("Trasportadora destruida com sucesso")
        })
    }
}
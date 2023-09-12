const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Deliveries = require('../models/deliveries')

module.exports = {
    async getAll(req, res) {
        const deliveries = await Deliveries(sequelize, Sequelize.DataTypes).findAll();
        res.status(200).send(deliveries)
    },
    async get(req, res) {
        const deliveries = await Deliveries(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(deliveries)
    },
    async create(req, res) {
        const deliveries = await Deliveries(sequelize, Sequelize.DataTypes).create({
            status: req.body.status,
            id_pedido: req.body.id_pedido,
            id_trasportadora: req.body.id_trasportadora,
            frete: req.body.frete
        })
        res.status(201).send({
            message: "Trasportadora criado com sucesso"
        })
    },
    async update(req, res) {
        const deliveries = await Deliveries(sequelize, Sequelize.DataTypes).update({
            status: req.body.status,
            id_pedido: req.body.id_pedido,
            id_trasportadora: req.body.id_trasportadora,
            frete: req.body.frete
        },
            {
                where: { id: req.params.id }
            })
        res.status(200).send({
            message: ("Trasportadora atualizado com sucesso")
        })
    },
    async delete(req, res) {
        await Deliveries(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        },
        )
        res.status(200).send({
            message: ("Entrega excluida com sucesso")
        })
    }


}
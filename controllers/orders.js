const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Orders = require('../models/orders');


module.exports = {
    async getAll(req, res) {
        const orders = await Orders(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(orders)
    },
    async get(req, res) {
        const orders = await Orders(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(orders)
    },
    async create(req, res) {
        const orders = await Orders(sequelize, Sequelize.DataTypes).create({

            valor_total: req.body.valor_total,
            data_pedido: req.body.data_pedido,
            quantidade: req.body.quantidade,
            id_cliente: req.body.id_cliente
        })
        res.status(200).send({
            message: ('Pedido cadastrado com sucesso')
        })
    },
    async update(req, res) {
        const orders = await Orders(sequelize, Sequelize.DataTypes).update({
            valor_total: req.body.valor_total,
            data_pedido: req.body.data_pedido,
            quantidade: req.body.quantidade,
            id_cliente: req.body.id_cliente
        },
            {
                where: { id: req.params.id }
            });
        res.status(200).send({
            message: ('Pedido atualizado com sucesso')
        })
    },
    async delete(req, res) {
        const orders = await Orders(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "pedido excluído."
        })
    }
}
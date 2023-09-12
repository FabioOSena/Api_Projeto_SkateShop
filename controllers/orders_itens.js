const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Orders_itens = require('../models/orders_itens');


module.exports = {
    async getAll(req, res) {
        const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(orders_itens)
    },
    async get(req, res) {
        const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(orders_itens)
    },
    async create(req, res) {
        const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).create({

            quantidade: req.body.quantidade,
            valor_parcial: req.body.valor_parcial,
            id_produto: req.body.id_produto,
            id_pedido: req.body.id_pedido
        })
        res.status(200).send({
            message: ('Produto do pedido cadastrado com sucesso')
        })
    },
    async update(req, res) {
        const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).update({
            quantidade: req.body.quantidade,
            valor_parcial: req.body.valor_parcial,
            id_produto: req.body.id_produto,
            id_pedido: req.body.id_pedido
        },
            {
                where: { id: req.params.id }
            });
        res.status(200).send({
            message: ('Produto do pedido atualizado com sucesso')
        })
    },
    async delete(req, res) {
        const orders_itens = await Orders_itens(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "produto do pedido excluído."
        })
    }
}
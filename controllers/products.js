const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Products = require('../models/products')


module.exports = {
    async getAll(req, res) {
        const products = await Products(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(products)
    },
    async get(req, res) {
        const products = await Products(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(products)
    },
    async create(req, res) {
        const products = await Products(sequelize, Sequelize.DataTypes).create({

        categoria:req.body.categoria,
        nome_produto:req.body.nome_produto,
        valor:req.body.valor,
        descricao:req.body.descricao,
        imagem:req.body.imagem

        })
        res.status(201).send({
            message: "produto cadastrado com sucesso. Boaaa"
        })
    },
    async update(req, res) {
        const products = await Products(sequelize, Sequelize.DataTypes).update({
        categoria:req.body.categoria,
        nome_produto:req.body.nome_produto,
        valor:req.body.valor,
        descricao:req.body.descricao,
        imagem: req.body.imagem
        },
            {
                where: { id: req.params.id }
            });
        res.status(200).send({
            message: ('Produto atualizado com sucesso')
        })
    },
    async delete(req, res) {
        const products = await Products(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "produto excluído com sucesso."
        })
    }
}
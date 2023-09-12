const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Cities = require('../models/cities')


module.exports = {
    async getAll(req, res) {
        const cities = await Cities(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(cities)
    },
    async get(req, res) {
        const cities = await Cities(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(cities)
    },
    async create(req, res) {
        const cities = await Cities(sequelize, Sequelize.DataTypes).create({

            nome_cidade: req.body.nome_cidade,
            id_estado: req.body.id_estado,

        })
        res.status(201).send({
            message: "Cidade cadastrada com sucesso. Boaaa"
        })
    },
    async update(req, res) {
        const cities = await Cities(sequelize, Sequelize.DataTypes).update({
            nome_cidade: req.body.nome_cidade,
            id_estado: req.body.id_estado,
        },
            {
                where: { id: req.params.id }
            });
        res.status(200).send({
            message: ('Cidades atualizado com sucesso')
        })
    },
    async delete(req, res) {
        const cities = await Cities(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "pedido excluído."
        })
    }
}
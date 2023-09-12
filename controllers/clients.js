
const Sequelize = require('sequelize')
const sequelize = require('../db/db');
const Clients = require('../models/clients');


module.exports = {

    async getAll(req, res) {
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll();
        res.status(200).send(clients)

    },

    async get(req, res) {
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(clients)
    },
    //testando//
    async create(req, res) {
        const clients = await Clients(sequelize, Sequelize.DataTypes).
            create({
                cpf: req.body.cpf,
                nome_cliente: req.body.nome_cliente,
                telefone: req.body.telefone,
                email: req.body.email,
                cidade: req.body.cidade,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                complemento: req.body.complemento,
                cep: req.body.cep,
                complemento: req.body.complemento,
                estado: req.body.estado,
                senha: req.body.senha
            })
        res.status(200).send({
            message: ('cliente cadastrado com sucesso')

        })

    },
    async update(req, res) {
        const clientes = await Clients(sequelize, Sequelize.DataTypes).
            update({
                cpf: req.body.cpf,
                nome_cliente: req.body.nome_cliente,
                telefone: req.body.telefone,
                email: req.body.email,
                cidade: req.body.cidade,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                complemento: req.body.complemento,
                cep: req.body.cep,
                complemento: req.body.complemento,
                estado: req.body.estado,
                senha: req.body.senha
            },
                {
                    where: { id: req.params.id }
                })
        res.status(200).send({
            message: ('cliente atualizado com sucessoo')
        })
    },

    async delete(req, res) {
        try {
            const clientId = req.params.id;

            await logins(sequelize, Sequelize.DataTypes).
                destroy({
                    where: {
                        clienteId: clienteId
                    }
                })
            const deletaCliente = await Clients(sequelize, Sequelize.DataTypes).destroy({
                where: {
                    id: clientId
                }
            })
            if (deletaCliente === 0) {
                return res.status(404).json({
                    massage: 'Cliente não encontrado'
                })
            }
            return res.status(200).json({ message: 'Cliente excluído com sucesso.' })


        } catch (error) {
            console.log('Error na busca do banco de dados.')
            return res.status(500).json({
                message: 'Erro interno do servidor'
            })
        }
    }
}

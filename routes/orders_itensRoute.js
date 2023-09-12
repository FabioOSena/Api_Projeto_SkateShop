const express = require('express');
const router = express.Router();

const orders_itensController = require('../controllers/orders_itens')


router.get('/', (req, res) => {
    orders_itensController.getAll(req, res)
});
router.get('/:id', (req, res) => {
    orders_itensController.get(req, res)
});

router.post('/', (req, res) => {
    orders_itensController.create(req, res)
});

router.put('/:id', (req, res) => {
    orders_itensController.update(req, res)
});

router.delete('/:id', (req, res) => {
    orders_itensController.delete(req, res)
});
module.exports = router
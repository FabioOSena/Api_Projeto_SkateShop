const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clients')


router.get('/', (req, res) => {
    clientsController.getAll(req, res)
});
router.get('/:id', (req, res) => {
    clientsController.get(req, res)
});

router.post('/', (req, res) => {
    clientsController.create(req, res)
});

router.put('/:id', (req, res) => {
    clientsController.update(req, res)
});

router.delete('/:id', (req, res) => {
    clientsController.delete(req, res)
});
module.exports = router
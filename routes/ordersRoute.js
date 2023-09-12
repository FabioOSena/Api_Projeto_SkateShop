
const express = require('express');

const router = express.Router();

const ordersController = require('../controllers/orders')


router.get('/', (req, res) => {
    ordersController.getAll(req, res)
})
router.get('/:id', (req, res) => {
    ordersController.get(req, res)
})
router.post('/', (req, res) => {
    ordersController.create(req, res)
})
router.put('/:id', (req, res)=>{
    ordersController.update(req,res)
})
router.delete('/:id',(req,res)=>{
    ordersController.delete(req,res)
})

module.exports = router
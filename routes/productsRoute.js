
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products')


router.get('/', (req, res) => {
    productsController.getAll(req, res)
})
router.get('/:id', (req, res) => {
    productsController.get(req, res)
})
router.post('/', (req, res) => {
    productsController.create(req, res)
})
router.put('/:id', (req, res)=>{
    productsController.update(req,res)
})
router.delete('/:id',(req,res)=>{
    productsController.delete(req,res)
})

module.exports = router
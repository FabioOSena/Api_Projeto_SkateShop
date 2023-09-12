const express = require('express')

const router = express.Router()

const deliveriesController = require('../controllers/deliveries')

router.get('/',(req,res)=>{
    deliveriesController.getAll(req,res)
})
router.get('/:id', (req,res)=>{
    deliveriesController.get(req,res)
})
router.post('/', (req, res) => {
    deliveriesController.create(req, res)
});

router.put('/:id', (req, res) => {
    deliveriesController.update(req, res)
});

router.delete('/:id', (req, res) => {
    deliveriesController.delete(req, res)
});
module.exports = router

const express = require('express');

const router = express.Router();

const carriersController = require('../controllers/carriers')


router.get('/', (req, res) => {
    carriersController.getAll(req, res)
})
router.get('/:id', (req, res) => {
    carriersController.get(req, res)
})

router.post('/', (req, res) => {
    carriersController.create(req, res)
})
router.put('/:id', (req, res)=>{
    carriersController.update(req,res)
})
router.delete('/:id',(req,res)=>{
    carriersController.delete(req,res)
})

module.exports = router
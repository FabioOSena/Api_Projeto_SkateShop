
const express = require('express');

const router = express.Router();

const statesController = require('../controllers/states')


router.get('/', (req, res) => {
    statesController.getAll(req, res)
})
router.get('/:id', (req, res) => {
    statesController.get(req, res)
})
router.post('/', (req, res) => {
    statesController.create(req, res)
})
router.put('/:id', (req, res)=>{
    statesController.update(req,res)
})
router.delete('/:id',(req,res)=>{
    statesController.delete(req,res)
})

module.exports = router
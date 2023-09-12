const express = require('express')
const router = express.Router();

const citiesController = require('../controllers/cities')

router.get('/', (req, res) => {
    citiesController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    citiesController.get(req, res)
});

router.post('/', (req, res) => {
    citiesController.create(req, res)
});
router.put('/:id', (req, res) => {
    citiesController.update(req, res)
})

router.delete('/:id', (req, res) => {
    citiesController.delete(req, res)
})

module.exports = router

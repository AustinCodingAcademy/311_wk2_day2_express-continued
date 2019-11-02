const express = require('express')
const router = express.Router()
const {list} = require('../controllers/products')


router.get('/products', list)

router.post('/products', (req, res) => {
  
})

router.put('/products', (req, res) => {
  
})

router.delete('/products', (req, res) => {
  
})

module.exports = router;
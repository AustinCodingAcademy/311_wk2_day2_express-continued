const express = require('express');
const router  = express.Router();
const vehiclesController = require('../controllers/vehicles')

// const { list, show, create } = require('../routes/vehicles')

router.get('/vehicles', vehiclesController.list)
router.get('/vehicle/:id', vehiclesController.show)
router.post('/vehicles', vehiclesController.create)

// router.get( '/vehicles', (req, res) => {
// 	res.json( list() )
// })

// router.get( '/vehicles/:id', (req, res) => {
// 	res.json( show( req.params.id ) )
// })

// router.post( '/vehicles', (req, res) => {
// 	res.json( create( req.body ) )
// })

module.exports = router;
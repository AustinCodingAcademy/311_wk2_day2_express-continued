const express = require('express');
const router  = express.Router();
const contactsController = require('../controllers/contacts')

// const { list, show, create } = require('../routes/contacts')

router.get('/contacts', contactsController.list)
router.get('/contact/:id', contactsController.show)
router.post('/contacts', contactsController.create)

// router.get( '/contacts', (req, res) => {
// 	res.json( list() )
// })

// router.get( '/contacts/:id', (req, res) => {
// 	res.json( show( req.params.id ) )
// })

// router.post( '/contacts', (req, res) => {
// 	res.json( create( req.body ) )
// })

module.exports = router;
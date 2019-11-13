const express = require('express');
const router = express.Router();
const {displayContacts, postContacts, showContacts} = require('../controllers/contacts');


// app.get('/Contacts', function(req, res){
//   res.json('../data/Contacts')

// })

router.get('/contacts', displayContacts)

router.get('/contacts/:id', showContacts)

router.post('/contacts', postContacts)

module.exports = router
const contacts = require('../data/contacts')

function showContacts(req,res) {
	console.log(req.params)
	let foundContact = contacts.find(contact => {
		 console.log(contact)
		 return contact._id == req.params.id})
	res.json(foundContact)
	
}

function postContacts(req,res){
	req.body._id = contacts.length+1
contacts.push(req.body)
res.json(contacts)
}

function displayContacts(req,res) {
	res.json(contacts)
}


module.exports = {showContacts, postContacts, displayContacts}
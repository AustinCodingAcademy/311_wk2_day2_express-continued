const products = require('../data/products')

function showProducts(req,res) {
	console.log(req.params)
	let foundProduct = products.find(product => {
		 console.log(product)
		 return product._id == req.params.id})
	res.json(foundProduct)
	
}

function postProducts(req,res){
	req.body._id = products.length+1
products.push(req.body)
res.json(products)
}

function displayProducts(req,res) {
	res.json(products)
}


module.exports = {showProducts, postProducts, displayProducts}
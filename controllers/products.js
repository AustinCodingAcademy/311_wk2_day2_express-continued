const products = require('../data/products')

const productsList = (req, res) => {
  res.json(products)
}

const productsListById = (req,res) => {
  const found = products.some(product => product._id == req.params.id);
  if(found){
    res.send(products.filter(product => product._id == req.params.id))
  }else{
    res.status(404).json({msg: 'Product not found'});
  }
}

const createProduct = (req, res) => { 
  counter = products.length;
  const newProduct = {
      _id: counter+1,
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      category: req.body.category,
    }

  if(!newProduct.name || !newProduct.description){
    return res.status(400).json({ msg: 'Please include a name and description'});
  }

  products.push(newProduct);
  res.json(products)
}



module.exports = { productsList, productsListById, createProduct };
//, productsListById, createProduct 

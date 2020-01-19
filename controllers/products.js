const products = require('../data/products');

// COUNTER FUNCTION
const counterP = function() {
  let id = products.length;
  id++;
  return id;
};
// GET ARRAY
exports.list = function list(req,res) {
  return res.json(products);
};
// GET ITEM
exports.show = function show(req, res) {
  let usrID = parseInt(req.params.id);
  let product = products.find(arrObj => arrObj._id === usrID);

  console.log(products);
  res.json(product);    
};
// POST ITEM
exports.create = function create(req,res) {
  const newProduct = {
    _id: counterP(),
    name: req.body.name,
    description: req.body.description,
    rating: parseInt(req.body.rating),
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: req.body.reviews
  };

  products.push(newProduct);
  console.log(newProduct);
  res.json(products);
};
const { products } = require("../data/products");

// get all
function getAll(req, res) {
  return res.json(products);
}
// get one
function getOne(req, res) {
  let product = products.find(
    product => product._id === parseInt(req.params.id)
  );
  if (product !== undefined) {
    return res.json(product);
  } else {
    return res.json({ msg: `Product ID #${req.params.id} does not exist...` });
  }
}
// post new
function postNew(req, res) {
  let counter = products.length;
  const newProduct = {
    _id: counter + 1,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: req.body.reviews
  };
  products.push(newProduct);
  res.json(products);
}

module.exports = { getAll, getOne, postNew };

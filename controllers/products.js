const products = require("../data/products")

// function for list
const list = (req, res) => {
  return res.json(products)
}

// function for show
const show = (req, res) => {
  let id = req.params.id - 1;
  return res.json(products[id])
};

// function for create
const create = (res, req) => {
  let counter =  products.length;
  let productsNew = req.body;
  productsNew._id = counter + 1;
  products.push(productsNew);
  let counterProduct = productsNew._id -1;
  return res.json(products[counterProduct])
}

//export modules
module.exports = {
  list,
  show,
  create
};

const products = require("../data/products");

const list = (req, res) => {
  res.json(products);
};

let productCounter = products.length;

const show = (req, res) => {
  const id = req.params.id;

  const match2 = products.find((product) => product._id === Number(id));
  res.json(match2);
};

const create = (req, res) => {
  products.push({
    _id: productCounter + 1,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: [
      {
        description: req.body.description,
        rating: req.body.rating,
      },
    ],
  });
  res.json(products);
};

module.exports = { list, show, create };

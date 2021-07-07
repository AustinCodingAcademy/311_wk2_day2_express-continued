const products = require("../data/products")

const list = (req, res)=>{
  res.json(products)
  console.log("getting all")
}

const show =  (req, res)=>{
  console.log(req)
  console.log(parseInt(req.params.id))
  for(let i = 0; i < products.length; i++){
    if(products[i]._id === parseInt(req.params.id)){
      res.json(products[i])
    }
  }
};
const create = (req, res)=>{
    // console.log(req)
    console.log(req.body)
  
    req.body._id = products.length+1;
    req.body.postId = 1;
    products.push(req.body);
    res.send("Post Added")
  };
module.exports = {
  list,
  show,
  create
}
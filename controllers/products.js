const products = require("../data/products");

functions list (Request,Response) {
  return Response.json(products);

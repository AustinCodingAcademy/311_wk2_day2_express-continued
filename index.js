const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const productRoutes = require('./routes/products');

const port = process.env.PORT || 4001;


// After move routes to Products
// app.use(ProductRoutes);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

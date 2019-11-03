const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

const commentRoutes = require("./routes/comments")
const contactRoutes = require("./routes/contacts")
const productRoutes = require("./routes/products")
const vehicleRoutes = require("./routes/vehicles")


//app.use()
app.use(bodyParser.json ())
//const commentRoutes = express.Router()
app.use(commentRoutes)
//const contactRoutes = express.Router()
app.use(contactRoutes)
//const productRoutes = express.Router()
app.use(productRoutes)
//const vehicleRoutes = express.Router()
app.use(vehicleRoutes)


// Navigate to http://localhost:4001 to see the web page
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

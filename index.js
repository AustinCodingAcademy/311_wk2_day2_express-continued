const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use('/', express.static('public'));
app.use( bodyParser.json() );
const productRoutes = require("./routes/products")
const vehicleRoutes = require("./routes/vehicles")
const commentsRoutes = require("./routes/comments")
const contactsRoutes = require("./routes/contacts")
const port = process.env.PORT || 4001;
app.use(productRoutes)
app.use(vehicleRoutes)
app.use(commentsRoutes)
app.use(contactsRoutes)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

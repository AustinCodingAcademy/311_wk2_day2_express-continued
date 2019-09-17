const express = require("express");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const app = express();

const contactRoute = require("./routes/contacts");
const vehicleRoute = require("./routes/vehicles");
const commentRoute = require("./routes/comments");
const productRoute = require("./routes/products");

app.use(contactRoute);
app.use(vehicleRoute);
app.use(commentRoute);
app.use(productRoute);

const port = process.env.PORT || 4001;

app.use("/", express.static("public"));

app.listen(port, () => {
	console.log(`Hail Satan on port ${port}!`);
});

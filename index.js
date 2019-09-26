const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");

const app = express();

const port = process.env.PORT || 4001;

app.get("/contacts", (req, res) => {
	res.json(contacts);
});
app.get("/vehicles", (req, res) => {
	res.json(vehicles);
});
app.get("/comments", (req, res) => {
	res.json(comments);
});
app.get("/products", (req, res) => {
	res.json(products);
});

router.use(contacts);
router.use(vehicles);
router.use(comments);
router.use(products);

app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});

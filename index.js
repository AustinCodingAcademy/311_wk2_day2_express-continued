const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require("./routes/contacts");
const vehiclesRouter = require("./routes/vehicles");
const productsRouter = require("./routes/products");
const commentsRouter = require("./routes/comments");
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(contactsRouter);
app.use(vehiclesRouter);
app.use(productsRouter);
app.use(commentsRouter);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

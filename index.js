const express = require("express");
const bodyParser = require("body-parser");
// const contact = require("./data/contacts");
const contactsRoutes = require("./routes/contacts");
const commentsRoutes = require("./routes/comments.js");
const vehiclesRoutes = require("./routes/vehicles.js");
const productsRoutes = require("./routes/products.js");
// const comments = require("./data/comments");
// const vehicles = require("./data/vehicles");
// const products = require("./data/products");
const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(contactsRoutes);
// app.use(commentsRoutes);
// app.get("/contacts", (req, res)=>{
//     res.json(contact);
// });
// app.get("/contacts/:id", (req, res)=>{
//     const id = req.params.id;
//     const found = contact.find(contacts => contacts._id === Number(id));
//     res.json(found);
//     console.log(found);
// });

// app.get("/comments", (req, res)=>{
//     res.json(comments);
// });
// app.get("/comments/:id", (req, res)=>{
//     const id = req.params.id;
//     const found = comments.find(comment => comment._id === Number(id));
//     res.json(found);
//     console.log(found);
// });

// app.get("/vehicles", (req, res)=>{
//     res.json(contacts);
// });

// app.get("/products", (req, res)=>{
//     res.json(comments);
// });
const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

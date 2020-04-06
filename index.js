const express = require("express");
const bodyParser = require("body-parser");
const contacts = require('./routes/contacts');
const vehicles = require('./routes/vehicles');
const comments = require('./routes/comments');
const products = require('./routes/products');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(require('./routes'));

app.use(comments)
app.use(contacts)
app.use(vehicles)
app.use(products)

    
//    app.get('/contacts/:id', (req, res) => {
//     const userId = req.params.id
//     res.send(`We'll be sending you user ${userId} shortly.`)
//   })

//contactCounter = contacts.length
// vehiclesCounter = vehicles.length
//commentCounter = comments.length
//productCounter = products.length


const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

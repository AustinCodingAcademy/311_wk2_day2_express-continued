const express = require('express')

const app = express()
const comments = require('./routers/comments.js')
const contacts = require('./routers/contacts.js')
const products = require('./routers/products.js')
const vehicles = require('./routers/vehicles')
const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(comments)
app.use(contacts)
app.use(products)
app.use(vehicles)

const bodyParser = require('body-parser');
app.use(bodyParser.json())

// app.post('/comments', (req, res)=>{
//     req.body._id = comments.length+1;
//     req.body.postId = 1;
//     comments.push(req.body);
//     res.send("Post Added")
// });
// app.post('/contacts', (req, res)=>{
//     req.body._id = contacts.length+1;
//     req.body.postId = 1;
//     contacts.push(req.body);
//     res.send("Post Added")
// });
// app.post('/products', (req, res)=>{
//     req.body._id = products.length+1;
//     req.body.postId = 1;
//     products.push(req.body);
//     res.send("Post Added")
// });
// app.post('/vehicles', (req, res)=>{
//     req.body._id = vehicles.length+1;
//     req.body.postId = 1;
//     vehicles.push(req.body);
//     res.send("Post Added")
// });

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

const express = require("express");
const bodyParser = require("body-parser");
const {comments} = require('./data/comments');
const {contacts} = require('./data/contacts');
const {products} = require('./data/products');
const {vehicles} = require('./data/vehicles');
const app = express();

console.log(comments)

const port = process.env.PORT || 4001;

//pulling in additional js files for organization's sake
app.use('/', express.static('public'));

//using body-parser to serve json-style
app.use(bodyParser.json());

//get routes
app.get('/comments', (req, res) => {
    console.log('comments' + comments)
    res.json(comments)
})
app.get('/contacts', (req, res) => {
    res.json(contacts)
})
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/vehicles', (req, res) => {
    res.json(vehicles)
})

//more routes
app.get('/:route', (req, res) => {
	let route;

	if ( req.params.route === "comments" ) { route = comments }
	if ( req.params.route === "contacts" ) { route = contacts }
	if ( req.params.route === "products" ) { route = products }
	if ( req.params.route === "vehicles" ) { route = vehicles }

	res.json( route );

})

//puting listening port down here
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

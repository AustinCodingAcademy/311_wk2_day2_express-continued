const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./data/contacts")
const vehicle = require("./data/vehicles")
const comments = require("./data/comments")
const products = require("./data/products")

const app = express();
app.use(express.static(__dirname + '/public'))
app.use(express.json());
const port = process.env.PORT || 4001;
app.get("/contacts",(req,res)=>{
    res.json(contacts)
})
app.post("/contacts",(req,res)=>{
contactPost = function() {
    let newContact = {
        _id: 12,
        body: req.body,
       
    };
    contacts.push(newContact);
    res.send(contacts);
};
})

app.get("/vehicle",(req,res)=>{
 res.json(vehicle);
})

app.get("/comments",(req,res)=>{

res.json(comments);
})
app.post("/comments",(req,res)=>{
PostComments = function(req, res) {
        let postComment = req.body;
        let newComment = {
            _id: ++counter,
            body: req.body,
            postId: req._id
        };
        comments.push(newComment);
        res.send(comments);
    };
})

app.get("/products",(rreq,res)=>{
 res.json(products);
})
//getting one thing
app.get("/contacts:_id",(req,res) => {
    res.json(contacts.filter(contact => contact._id == req.params.id));
    
})
app.get("/vehicle:_id",(req,res)=> {
    res.json(vehicles.filter(vehicle => vehicle._id == req.params.id));  

})
app.get("/comments_id",(req,res)=>{
    res.json(comments.filter(comment => comment._id == req.params.id));  
 
})
app.get("/products_id",(req,res) =>{
    res.json(products.filter(product => product._id == req.params.id));  

})
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

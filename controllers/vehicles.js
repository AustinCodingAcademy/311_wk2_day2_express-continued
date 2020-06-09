const vehicles = require("../data/vehicles")
const list = (req, res)=>{
  res.json(vehicles)
  console.log("getting all")
}

const show =  (req, res)=>{
  console.log(req)
  console.log(parseInt(req.params.id))
  for(let i = 0; i < vehicles.length; i++){
    if(vehicles[i]._id === parseInt(req.params.id)){
      res.json(vehicles[i])
    }
  }
};
const create = (req, res)=>{
    // console.log(req)
    console.log(req.body)
  
    req.body._id = vehicles.length+1;
    req.body.postId = 1;
    vehicles.push(req.body);
    res.send("Post Added")
  };
module.exports = {
  list,
  show,
  create
}
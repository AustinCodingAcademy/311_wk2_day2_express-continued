const express = require('express')
const {vehicles} = require('../data/comments')

let vehiclesCounter = vehicles.length;

//Get All Items
const list = (req,res) => {
  res.json(vehicles)
}

//Get One Comment
const show = (req, res) => {
  console.log(req,body)
  let itemId = req.params.id;
  let item = vehicles.find(item => item._id === Number(ItemId));
  res.json(item)
}

//Create One Comment
const create = (req, res) => {
  let itemId = req.body.id;
  let item = vehicles.find(item => item._id === Number(ItemId));
  req.body._id = vehiclesCounter +=1;
  vehicles.push(req.body)
  res.json(item)
}

module.exports = { list, show, create }
const express = require('express')

const { vehicles } = require('../data/vehicles')

let vehiclesCounter = vehicles.length;

// Get all items
const list = (req, res) => {
  res.json(vehicles)
}

// Get one comment
const show = (req, res) => {
  console.log(req.body)
  let itemId = req.params.id;
  let item = vehicles.find(item => item._id === Number(itemId));
  res.json(item)
}

// Create one comment
const create = (req, res) => {
  let itemId = req.body.id;
  let item = vehicles.find(item => item._id === Number(itemId));
  req.body._id = vehiclesCounter += 1;
  vehicles.push(req.body)
  res.json(item)
}

module.exports = { list, show, create }
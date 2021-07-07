const express = require('express')
const { contacts } = require('../data/contacts')

let contactsCounter = contacts.length;

//Get All Items
const list = (req,res) => {
  res.json(contacts)
}

//Get One Comment
const show = (req, res) => {
  console.log(req,body)
  let itemId = req.params.id;
  let item = contacts.find(item => item._id === Number(ItemId));
  res.json(item)
}

//Create One Comment
const create = (req, res) => {
  let itemId = req.body.id;
  let item = contacts.find(item => item._id === Number(ItemId));
  req.body._id = contactsCounter +=1;
  contacts.push(req.body)
  res.json(item)
}

module.exports = { list, show, create }
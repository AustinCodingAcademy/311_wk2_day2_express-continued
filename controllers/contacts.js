const express = require('express')

const { contacts } = require('../data/contacts')

let contactsCounter = contacts.length;

// Get all items
const list = (req, res) => {
  res.json(contacts)
}

// Get one comment
const show = (req, res) => {
  console.log(req.body)
  let itemId = req.params.id;
  let item = contacts.find(item => item._id === Number(itemId));
  res.json(item)
}

// Create one comment
const create = (req, res) => {
  let itemId = req.body.id;
  let item = contacts.find(item => item._id === Number(itemId));
  req.body._id = contactsCounter += 1;
  contacts.push(req.body)
  res.json(item)
}

module.exports = { list, show, create }
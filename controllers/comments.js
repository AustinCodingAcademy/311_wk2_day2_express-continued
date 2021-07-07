const express = require('express')

const { comments } = require('../data/comments')

let commentsCounter = comments.length;

// Get all items
const list = (req, res) => {
  res.json(comments)
}

// Get one comment
const show = (req, res) => {
  console.log(req.body)
  let itemId = req.params.id;
  let item = comments.find(item => item._id === Number(itemId));
  res.json(item)
}

// Create one comment
const create = (req, res) => {
  let itemId = req.body.id;
  let item = comments.find(item => item._id === Number(itemId));
  req.body._id = commentsCounter += 1;
  comments.push(req.body)
  res.json(item)
}

module.exports = { list, show, create }
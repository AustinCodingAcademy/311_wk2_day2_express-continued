const express = require('express')
const { comments } = require('../data/comments')

let commentsCounter = comments.length;

//Get All Items
const list = (req,res) => {
  res.json(comments)
}

//Get One Comment
const show = (req, res) => {
  console.log(req,body)
  let itemId = req.params.id;
  let item = comments.find(item => item._id === Number(ItemId));
  res.json(item)
}

//Create One Comment
const create = (req, res) => {
  let itemId = req.body.id;
  let item = comments.find(item => item._id === Number(ItemId));
  req.body._id = commentsCounter +=1;
  comments.push(req.body)
  res.json(item)
}

module.exports = { list, show, create }
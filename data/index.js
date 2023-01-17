const express = require("express");

const contacts = require('./contacts');
const comments = require('./comments')
const vehicles = require('./vehicles')
const products = require('./products')

module.exports = {
    contacts,
    comments,
    vehicles,
    products
}
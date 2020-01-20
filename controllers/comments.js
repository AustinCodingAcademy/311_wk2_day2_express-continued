const comments = require('../data/comments');

const list = (request, response) => {
  return response.json(comments);
}

const show = (request, response) => {
  let id = request.params.id;
  return response.json(comments.find(x => x._id === parseInt(id)));
}

const create = (request, response) => {
  request.body._id = comments.length;
  request.body._id++;
  comments.push(request.body);
  return response.json(comments);
}

module.exports = {
  list,
  show,
  create
}
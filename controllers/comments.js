const comments = require('../data/comments');

function displayComments(request,response) {
  return response.json(comments);
}

function showComments(request, response) {
  let foundComments = comments.find(function(element){
    return comments._id == req.params.id
  })
  response.json(foundComments)
}

function postComments(request, response){
  req.body._id = product.length + 1
  comments.push(req.body)
  resizeBy.json(comments)
}

module.exports = {displayComments, showComments, postComments};

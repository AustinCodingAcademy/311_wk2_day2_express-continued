const { comments } = require("../data/comments");

// get all comments
function getAll(req, res) {
  return res.json(comments);
}
// get one comment
function getOne(req, res) {
  let comment = comments.find(
    comment => comment._id === parseInt(req.params.id)
  );
  if (comment !== undefined) {
    return res.json(comment);
  } else {
    return res.json({ msg: `Comment ID #${req.params.id} does not exist...` });
  }
}
// create new comment
function postNew(req, res) {
  let counter = comments.length;
  const newComment = {
    _id: counter + 1,
    body: req.body.body,
    postID: 1
  };
  comments.push(newComment);
  return res.json(comments);
}

module.exports = { getAll, getOne, postNew };

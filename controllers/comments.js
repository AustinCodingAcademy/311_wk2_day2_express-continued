const { comments } = require('../data');

module.exports = {
    list: (req, res) => { res.json(comments) },
    show: (req, res) => {
        res.json(
            comments.find(
                comment => comment._id === parseInt(req.params.id)
))},
create: (req, res) => {
 const addInfo = {
    ...req.body,
    _id: comments[comments.length -1]._id + 1
 }

    comments.push(addInfo);
    res.json(addInfo);
    }
}
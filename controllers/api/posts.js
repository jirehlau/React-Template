const Post = require('../../models/Post');

module.exports = {
    index,
    create
}

async function index(req, res) {
    Post.find({}, function(err, posts){
        res.json(posts)
    })
}

async function create(req, res) {
    Post.create(req.body, function(err, post) {
        res.status(200).json('okay!')
    })    
}



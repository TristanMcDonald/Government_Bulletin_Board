const express = require('express')
const router = express.Router();
const Post = require('../models/post')
const checkauth = require('../check-auth')

// https://www.json.org/json-en.html
router.get('', (req, res) => {
    Post.find().then((posts) => (
        res.json(
            {
                message: 'Posts found',
                posts:posts
            }
        )
    ))
})

router.post('', checkauth, (req,res) => {
    const post = new Post (
        {
            subject: req.body.subject,
            description: req.body.description
        }
    )
    post.save().then(() => {
        res.status(201).json({
            message: 'Post created',
            post: post
        })
    })   
})

router.delete('/:id', checkauth, (req,res) => {
    Post.deleteOne({_id: req.params.id})
    .then((result) => 
    {
        res.status(200).json({message: "Post Deleted"});
    });
})

module.exports = router
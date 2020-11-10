const express = require('express')
const router = express.Router()
const Post = require('../model/Post')


router.get('/posts', (req, res, next)=>{
    Post.find({}).then(data => res.send(data))
})

router.post('/posts', (req, res, next)=>{
    Post.create(req.body)
    .then(data => res.send(data))
    .catch(next)
})

router.put('/posts/:id', (req, res, next)=>{
    res.send({type:'PUT'})
})

router.delete('/posts/:id', (req, res, next)=>{
    Post.findByIdAndRemove({_id: req.params.id})
    .then(data => res.send(data))
})

module.exports = router
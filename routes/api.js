const express = require('express')
const router = express.Router()
const Post = require('../model/Post')


router.get('/posts', (req, res, next)=>{
    res.send({type:'GET'})
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
    res.send({type:'DELETE'})
})


module.exports = router
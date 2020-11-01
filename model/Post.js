const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    post: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('posts', PostSchema)

module.exports = Post
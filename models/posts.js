const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
      type: String,
      required: true
    },
    author: {
        type: String,
        default: "Momoh Nobert"
    },
    content: {
        type: String,
        required: true
    },
    post_type: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)
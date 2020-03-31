const Post = require('../models/posts');

exports.error = (req, res, next) => {
    res.status(404).render('error', {
        pageTitle: 'Error, it seems you\'re lost. Find yourself'
    } )
}

exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Welcome to Nobert\'s Portfolio',
        path: '/'
    })
}

exports.getBlog = (req, res, next) => {
    Post.find({post_type : "blog"}).then(posts => {
        res.render('blog', {
            pageTitle: 'Musing about Curiosities and Inspirations',
            path: '/blog',
            posts: posts
        } )
    })
}

exports.getProjects = (req, res, next) => {
    Post.find({post_type : "projects"}).then(posts => {
        res.render('projects', {
            pageTitle: 'Job and Learning Related Projects',
            path: '/projects',
            posts: posts
        } )
    })
}

exports.getContactMe = (req, res, next) => {
    res.render('contact-me', {
        pageTitle: 'If you see me drive by...',
        path: '/contact-me'
    } )
}


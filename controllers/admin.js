const User = require('../models/admin');
const Post = require('../models/posts');

exports.getLogin = (req, res, next) => {
    res.render('admin-login', {
        pageTitle: 'Hello Okhai....Or Are You?!'
    })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          return res.status(422).render('welcome-page', {
            errorMessage: 'No user registered with this email'
          });
        }
        if (password == password) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            console.log("logged in. cookie created")
            return req.session.save(err => {
                res.redirect('/admin/create-a-post');
              });
        }
      })
      .catch(err => console.log(err))
}

exports.createAPost = (req, res, next) => {
  res.render('create-a-post', {
    pageTitle: 'Yeah! Progress. Create a New Post'
  })
}

exports.getAPost = (req, res, next) => {
    const title = req.body.title
    const subject = req.body.subject
    const author = req.body.author
    const content = req.body.content
    const postType = req.body.postType
    const thumbnail = req.body.thumbnail

    const post = new Post({
      title: title,
      subject: subject,
      author: author,
      content: content,
      post_type: postType,
      thumbnail: thumbnail
    })
    return post.save(err => {
      console.log("Post Created")
      res.redirect('/admin/create-a-post')
      })
}
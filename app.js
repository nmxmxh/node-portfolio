const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = `mongodb://localhost:27017/MyPortfolioDB`;

const favicon = require('serve-favicon');
const compression = require('compression');

const User = require('./models/admin');

const app = express();
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || MONGODB_URI,
  collection: 'sessions'
});


app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err));
    });
});

const controller  = require('./controllers/user');

app.set('view engine', 'pug');
app.set('views', 'views');

const routes = require('./routes/routes');
const adminRoutes = require('./routes/admin');

app.use(favicon(path.join(__dirname, 'favicon.ico'))) 
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
app.use(helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      vibrate: ["'none'"],
      syncXhr: ["'none'"]
    }
}))


app.use(compression()); 

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes)
app.use('/admin', adminRoutes)

app.use(controller.error);


mongoose
    .connect(process.env.MONGODB_URI || MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        console.log('Connected to Database')
        app.listen(process.env.PORT || 4000)
    })
    .catch(err => {
        console.log(err);
    });

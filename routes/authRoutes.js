const express = require('express')
const db = require('../models')
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
},
  function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

router.post('/register', (req, res) => {
  user = req.body;
  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    user.password = hash;
    db.User.create(user).then(response => console.log("User in database"))

    res.redirect('/home');

    // res.json(user.username);
    // db.User.findOne({ where: { email: user.email } }).then(results => {
    //   // console.log(results.dataValues.id)
    //   req.login(results.dataValues.id, function (err) {
    //     res.json(results.dataValues.username);
    //   });
    // });
  })
});

router.post('/login', (req, res) => {
  //placeholder dummy login logic
  db.User.findOne({ where: { email: req.body.email } }).then(user => {
    // console.log(user)
    if (user) {
      //run passport js middleware function
      bcrypt.compare(req.body.password, user.dataValues.password).then (function (result){
        if(result === true){
          res.json(user.dataValues.username)
        } else res.json("Inncorrect password")
      });
    } else {
      res.json('No user with that email')
    }
  })
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = router;

const express = require('express')
const db = require('../models')
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport')


router.post('/register', (req, res) => {
    user = req.body;
    if (!user.username || !user.email || !user.password) {
        res.send('You are missing one or more of the required feilds');
        return;
    }
    bcrypt.hash(user.password, saltRounds, function (err, hash) {
        user.password = hash;
        db.User.create(user).then(response => console.log("User in database"))
        db.User.findOne({where: { email: user.email } }).then(results => {
            console.log(results)
            req.login(results.id, function(err) {
                res.redirect('/');
            });
        });
        res.send('Made an account');

    })
});

router.post('/login', (req, res) => {
    //placeholder dummy login logic
    db.User.findOne({ where: { email: req.body.email } }).then(user => {
        console.log(user)
        if (user) {
            //run passport js middleware function
            user.dataValues.password === req.body.password ? res.json(user) : res.json('password incorrect')
            req.login(user.id, function(err){
                res.redirect('/');
            });
        } else {
            res.json('No user with that email')
        }
    })
});

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id, done) {
    done(null,id);
});

module.exports = router;

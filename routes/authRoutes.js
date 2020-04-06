'use strict'
const router = require('express').Router();
const path = require('path');

router.post('/user/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);
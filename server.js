const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const hollerRoutes = require('./routes/hollerRoutes');
// const sqlRoutes = require('./routes/sqlRoutes')
const db = require('./models');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require ('cookie-parser')
const passport = require ('passport')


app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

 app.use(cookieParser());

//Authentication
var session = require('express-session')
app.use(session ({
  secret: 'asdftwerjghdfg1235t',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))
//Initalize Passport
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', hollerRoutes);
app.use('/user', authRoutes)
app.use('/api', hollerRoutes)

db.sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
console.log('app is running on port ', PORT)
})
})

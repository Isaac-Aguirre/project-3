const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const hollerRoutes = require('./routes/hollerRoutes');
const sqlRoutes = require('./routes/sqlRoutes')
const db = require('./models');
const dotenv = require("dotenv")
dotenv.config();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// app.use('/api', hollerRoutes);
// app.use ('/', )
app.use('/data', sqlRoutes);
app.use('/api', hollerRoutes)

db.sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
console.log('app is running on port ', PORT)
})
})

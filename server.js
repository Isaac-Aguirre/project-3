const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const hollerRoutes = require('./routes/hollerRoutes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(hollerRoutes);

app.listen(PORT, ()=>{
console.log('app is running on port ', PORT)
})
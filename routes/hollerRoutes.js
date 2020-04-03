const router = require('express').Router();
const path = require('path');
const axios = require('axios')


router.get('/news', (req,res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=202c602fbb43401b8edba58b90808784`)
    .then(data=>res.json(data.data.articles))
})



router.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router;
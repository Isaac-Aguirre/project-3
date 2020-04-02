const router = require('express').Router();
const path = require('path');

router.post('/api/login', (req,res)=>{
    //placeholder dummy login logic
    console.log(req.body)
    if(req.body.password === 'abc'){
        console.log('logged in!')
        res.json({user: 'Armen'})
    }else{
        res.json(null)
    }
})



router.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router;
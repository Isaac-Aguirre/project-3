const router = require('express').Router()
const db = require('../models')

router.post('/signup', ({body},res)=>{
    console.log(body)
    db.User.create(body).then(response=> console.log(response))
});

router.post('/login', (req,res)=>{
    //placeholder dummy login logic
   db.User.findOne({where:{email: req.body.email}}).then(user=>{
       console.log(user)
       if(user){
           //run passport js middleware function
           user.dataValues.password === req.body.password ? res.json(user) : res.json('password incorrect')
       } else {
          res.json('No user with that email') 
       } 
   })
});
// router.get('/users/:id?', async (req, res) => {
//     let id = req.params.id;
//     if (id) {
//         try {
//             let results = await db.one(id);
//             res.json(results);
//         } catch (e) {
//             console.log(e);
//             res.sendStatus(500);
//         }
//     } else {
//         try {
//             let results = await db.all();
//             res.json(results);
//         } catch (e) {
//             console.log(e);
//             res.sendStatus(500);
//         }
//     }
// });


// router.get('/howls/:id?', async (req, res) => {
//     let id = req.params.id;
//     if (id) {
//         try {
//             let results = await db.one(id);
//             res.json(results);
//         } catch (e) {
//             console.log(e);
//             res.sendStatus(500);
//         }
//     } else {
//         try {
//             let results = await db.all();
//             res.json(results);
//         } catch (e) {
//             console.log(e);
//             res.sendStatus(500);
//         }
//     }
// });

// router.post('/howls/:id?', async (req, res) => {

//     connection.query("INSERT INTO howls (howls_text) VALUES (?)", [req.body.task], function (err, result) {
//         if (err) throw err;

//         res.redirect("/homepage");
//     },
//     )
// });

// router.put('/howls/:id?', async (req, res) => {

// })

module.exports = router;
const router = require('express').Router()
const db = require('../models');
const bcrypt = require('bcrypt')

router.post('/signup', ({body},res)=>{
    console.log(body)
    db.User.findOne({where:{email:body.email}}).then(data=>{
        if(data){
            res.json({success: 0, msg:'user already exists with that email!'})
        }else{
        bcrypt.hash(body.password, 10, function (err, hash) {    
        db.User.create({...body, password:hash, followers: "[]", following:"[]", }).then(response=>{
        res.json({...response.dataValues, success: 1})
        console.log(response)})
            })
        }
}).catch(err=>console.log(err))
});

router.put('/user/follow', ({body}, res)=>{
    db.User.findOne({where:{email:body.userA}}).then(data1=>{
        let userAFollowing = JSON.parse(data1.dataValues.following);
        userAFollowing.push(body.userB);
        db.User.update({following: JSON.stringify(userAFollowing)},{where:{email:body.userA}}).then(data2=>{
            console.log(data2)
            db.User.findOne({where:{email:body.userB}}).then(data3=>{
                let userBFollowers = JSON.parse(data3.dataValues.followers);
                userBFollowers.push(body.userA);
                db.User.update({followers: JSON.stringify(userBFollowers)},{where:{email:body.userB}}).then(data4=>{
                    console.log(data4);
                    res.json('following complete!')
                })
        })
        })
           
        
    })
})



router.post('/login', (req, res) => {
    //placeholder dummy login logic
    db.User.findOne({ where: { email: req.body.email } }).then(user => {
      // console.log(user)
      if (user) {
        //run passport js middleware function
        bcrypt.compare(req.body.password, user.dataValues.password).then (function (result){
            console.log(result)
          if(result === true){
            res.json({success: 1, ...user.dataValues})
          } else res.json({success: 0, msg:"Inncorrect password"})
        });
      } else {
        res.json({success: 0, msg:"No user with that email"})
      }
    })
  });
  
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
// router.get('/user/:id', (req,res)=>{
//     db.Followers.findOne({where:{id:req.params.id}}).then(followers=> res.json(followers))
// })
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
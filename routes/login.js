const express = require("express");
const router = express.Router();
const db = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

router.use(express.urlencoded({extended: false}));
router.use(express.json());

console.log(db.users)







router.get("/registration", async(req, res) => {
    let records = await db.regions.findAll();

    records.forEach(record => {
       console.log(record.dataValues.name)
   })
    // console.log(regions)
    
    res.render('registration', {
            records: records
    });
});
//form submitted
router.post('/registration', async (req, res)=>{

  try{
    //get information from header 
    let {username, password, email, regionID} = req.body;

    //hash our password 
    let passwordEncrypted = bcrypt.hashSync(password, 8);

    //store username, password, email inside database

    let result = await db.users.create({
      username: username, 
      password: passwordEncrypted, 
      email: email, 
      regionID: 2
    })

    res.redirect('/login')
    
  }
  catch(error){
    res.send(error)
  }
})

module.exports = router;





router.get("/login", (req, res) => {
  res.render('login')
});

router.get('/logout', (req, res) => {
  req.logout();  //clears the session.  

  res.redirect('/');

})

passport.use(new LocalStrategy( async (username, password, done)=>{

  try{
    // make db call to check if username is in our db

    let records = await db.users.findAll({where: {username: username}});
    //[{}]

    if(records != null){
      // check passwords
      let record = records[0];

      bcrypt.compare(password, record.password, (err, response)=>{

          if(response){
            //this means a match, user has correct password
            done(null, {id: record.id, username: record.username})
          }
          else{
            //passwords didn't match
            done(null, false)
          }
      })

    }
    else{
      //user wasn't found in our db
      done(null, false)
    }

    //if user is in db, then check if password is valid

    // done(null, {})

    // done(null, false)
  }
  catch(error){

  }

}))

router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), 
(req, res) => {
  
  console.log(`inside of login ${req.isAuthenticated()}`);
  res.send('you made it through')

})

passport.serializeUser((user, done)=>{

  //passport is adding information to the sessions {id:"", username:""}

  done(null, user.id)
})

passport.deserializeUser(async (id, done)=>{
  console.log('deserializing user');
  done(null, id)
  // try{

  //   //additional security 
  //   //checkign to see if user is valid with the cookie that was passed 
  //   // form the request
  //   // id is coming from the session
  //     let user = await db.users.findByPk(id);

  //     done(null, user)
  // }
  // catch(error){
  //   done(null, false)
  // }
  
})



module.exports = router;
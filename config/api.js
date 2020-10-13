//------------------------(Dependencies)------------------------------
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const sgMail = require('@sendgrid/mail');
let mysqlConnection= require('./config')
//-----------------------------------------------------------------------

//-------------------------(middelware)------------------------------------
let router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(session({
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  secret: 'is a secret',
  cookie:{
    maxAge: 1000 * 60 * 60 * 2,
    sameSite: true,
    secure: false
  }
}))

const redirectLogin =(req,res,next)=>{
  if (!req.session.userId){
    res.redirect('/signup')
  }else {
    next()
  }
}
//---------------------------------------------------------------

//-------------(Send mail:forgot password)-------------
//you get your SENDGRID_API_KEY when u create new AÏ_KEY in Send Grid
//you had to add SENDGRID_API_KEY in your variabales environnemet

sgMail.setApiKey(process.env._SENDGRID_API_KEY);
var msg = {
  to: '',
  from: '',
  subject: '',
  text: '',
  html: '',
};

//------------------------------------------------------------------------------

///------------------(Routes: SQl Query)----------------------------------------
var nameuser = 'User Name'
//This methodes for generate a random string to our token for forgot password feature
let token = Math.random().toString(36).substring(1);
//Post login data (Add user in DB)
router.post('/register', async (req,res,next)=>{
  try{
    user=req.body
    req.session.register= false;
    //const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, 10)
    //Querry to insert new data in our users table
    var sql =" INSERT INTO users (UserName,UserMail,UserPassword,tokenKey) VALUES ( ?,?,?,?)";
    mysqlConnection.query(sql, [user.name,user.mail,hashedPassword,token],(err,rows,fields)=>{
      if (!err) {
        console.log('Succes');
        req.session.register= true;
        console.log('Register is true');
    }
      else {
        console.log(err);
      }
    });
    sql ="SELECT * from users WHERE UserMail = ? ";
    mysqlConnection.query(sql, [user.mail],async (err,rows,fields)=>{
      if (!err) {

          req.session.userId = rows[0].idUsers
          req.session.variabales={
           id:rows[0].idUsers,
           name:rows[0].UserName,
           mail:rows[0].UserMail,
           country:rows[0].country,
           status:rows[0].status,
           gender:rows[0].genre,
           Date:rows[0].date_naiss,
           image:rows[0].img
           }
         console.log('We will send an email check your box');
         sgMail.send(msg={
            to: user.mail,
            from:'i.bellaouedj@esi-sba.dz',
            subject:'Validation Mail',
            text:'Click in this URL to Confirm your Regesting http://localhost:8080/valid/'+token,
            html:'Click in this URL to Confirm your Regesting http://localhost:8080/valid/'+token,
          }).then(() => {
               console.log('Validation Message sent')
          }).catch((error) => {
             console.log(error.response.body)
            // console.log(error.response.body.errors[0].message)
         })
          nameuser =  rows[0].UserName
          console.log('User Id ==> ',req.session.userId);
          res.send('Check Your Box')
          res.end()
          //next();
         }
      else {
        console.log(err);
      }
    });
  }
  catch{
    res.status(500).send(error.message)
  }

});
//--------------
//Register for App Mobile
//This methodes for generate a random string to our token for forgot password feature
let token2 = Math.random().toString(36).substring(1);
//Post login data (Add user in DB)
router.post('/registerMob', async (req,res,next)=>{
     try {


       user=req.body
       //const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(user.password, 10)
       //Querry to insert new data in our users table
       var sql =" INSERT INTO users (UserName,UserMail,UserPassword,tokenKey) VALUES ( ?,?,?,?)";
       mysqlConnection.query(sql, [user.name,user.mail,hashedPassword,token2],(err,rows,fields)=>{
          if (!err) {
             console.log('Succes');
             req.session.register= true;
             console.log('Register is true');
             res.end("Register Succes")
          }
          else {
                console.log(err);
                res.end(err.message)
          }
       });

      } catch (e) {
        res.status(500).send(e)
      }

});
//--------------------------------------
//function for Validation
router.get('/valid/:token',(req,res,next)=>{
  if(token === req.params.token)
  {console.log('Token confirmed');
    res.redirect('/user')
    next()
  }
  else {
    console.log('Token not confirmed')
    res.status(500).send('There is an Error')
  }
})
//---------------------------------
//Post login : to get the users infos
router.post('/login',async (req,res,next)=>{
  try {
    const bcrypt = require('bcrypt')
    user=req.body
    var sql ="SELECT * from users WHERE UserMail = ? ";
    mysqlConnection.query(sql, [user.mail2],async (err,rows,fields)=>{
      if (!err) {
        if ( (await bcrypt.compare(user.password2,rows[0].UserPassword)) || (user.password2 === rows[0].tokenKey) )
         {
            req.session.userId = rows[0].idUsers
            req.session.userName = rows[0].UserName
            req.session.variabales={
             id:rows[0].idUsers,
             name:rows[0].UserName,
             mail:rows[0].UserMail,
             country:rows[0].country,
             status:rows[0].status,
             gender:rows[0].genre,
             Date:rows[0].date_naiss,
             image:rows[0].img
            }
            if (rows[0].idUsers === 45 || rows[0].idUsers === 46 || rows[0].idUsers === 46){
              res.redirect('/admin')
            }
            console.log('User Id ==> ',req.session.userId);
            // res.render('UserPages/user',req.session.variabales)
            res.redirect('/user')
            console.log({mail:user.mail2,
                         psw:user.password2});
          }
         }
      else {
        console.log(err);
      }
      });
  } catch {
    res.status(500).send(error.message)
  }
})
//--------------
// Login for mobile
router.post('/loginMob',async (req,res,next)=>{
  try {
    const bcrypt = require('bcrypt')
    user=req.body
    var sql ="SELECT * from users WHERE UserMail = ? ";
    mysqlConnection.query(sql, [user.mail2],async (err,rows,fields)=>{
      if (!err) {
        if ( (await bcrypt.compare(user.password2,rows[0].UserPassword)) || (user.password2 === rows[0].tokenKey) )
         {

            console.log('User Id ==> ',req.session.userId);
            // res.render('UserPages/user',req.session.variabales)
            // res.redirect('/user')
            console.log({mail:user.mail2,
                         psw:user.password2});
                         res.end( "Login Success")
          }
         }
      else {
        console.log(err);
        res.end(err.message)
      }
      });
  } catch {
    res.status(500).send(error.message)}
})
//----------------------------------
//     Logout
router.get('/logout',(req , res)=>{
  req.session.destroy(err=>{
    if(err){
      return res.redirect('/');
    }})
    res.clearCookie('sid')
    res.redirect('/signup')

})
// ---------------------------------
//Forgot a password
router.post('/forgotPSW', async(request, response) => {
  var mail=request.body
  var sql =" SELECT * from users WHERE UserMail = ?";
  mysqlConnection.query(sql, [mail.forgot],async(err,rows,fields)=>{
    if (!err) {

        console.log(rows[0].tokenKey);
        sgMail.send(msg={
           to: mail.forgot,
           from: 'i.bellaouedj@esi-sba.dz',
           subject: 'Sending with Twilio SendGrid is Fun',
           text: 'Hello m Yonko i m glad you read that this is ur Token : \n ' + rows[0].tokenKey,
           html: '<strong>Hello m Yonko i m glad you read that this is ur Token :</strong>  \n ' + rows[0].tokenKey,
         }).then(() => {
              console.log('Message sent')
         }).catch((error) => {
            console.log(error.response.body)
           // console.log(error.response.body.errors[0].message)
        })
        response.render('Home page/forgot-pass',{msg:"Check Your Email "})
        response.end()
  }
  else {
    console.log(err);
  }
});
})
//-----------------------
//   Form for users
router.get('/form',redirectLogin,(request, response) => {
  var sql =" SELECT * from users WHERE idUsers = ?";
  mysqlConnection.query(sql, [request.session.userId],async(err,rows,fields)=>{
  response.render('UserPages/form',{
    name:rows[0].UserName,
    mail:rows[0].UserMail,
    country:rows[0].country,
    status:rows[0].status,
    gender:rows[0].genre,
    date:rows[0].date_naiss,
    image:rows[0].img
  })
})
})
//----------------Update the data of Users
router.post('/forum',redirectLogin,(request, response) => {
   console.log('update data ');
   var infos=request.body
        //Check if there is sommething that didn't change in our db
        var sql =" SELECT * from users WHERE idUsers = ?";
        mysqlConnection.query(sql, [request.session.userId],async(err,rows,fields)=>{
          if (infos.name==''){
            infos.name=rows[0].UserName
          }
          if (infos.mail==''){
            infos.mail=rows[0].UserMail
          }
          if (infos.country==''){
            infos.country=rows[0].country
          }
          if (infos.status==''){
            infos.status=rows[0].status
          }
          if (infos.gender==''){
            infos.gender=rows[0].genre
          }
          if (infos.Date==''){
            infos.Date=rows[0].date_naiss
          }
          if (infos.image==''){
            infos.image=rows[0].img
          }

          // This querry for update date in our db
          sql = "UPDATE users SET UserName=?,UserMail=?,status=?,country=?,genre=?,date_naiss=?,img=? WHERE idUsers = ?"
          mysqlConnection.query(sql, [infos.name,infos.mail,infos.status,infos.country,infos.gender,infos.Date,infos.image,request.session.userId],async(err,rows,fields)=>{
            if (!err) {
              console.log('Update data successfuly');
              response.render('UserPages/form',{
                name: infos.name,
                mail:infos.mail,
                country:infos.country,
                status:infos.status,
                gender:infos.gender,
                date:infos.Date,
                image:infos.image
              })
            }
            else {
               console.log(err);
             }

   });
        })

})

// ---------------------------------
//Contact Us Session User
router.post('/user/contact',redirectLogin, async(request, response) => {
  var contact=request.body
  // var sql =" SELECT * from users WHERE UserMail = ?";
  // mysqlConnection.query(sql, [mail.forgot],async(err,rows,fields)=>{
  //   if (!err) {
        console.log(request.body);
        sgMail.send(msg={
           to: 'iblyo116@gmail.com',
           from:'i.bellaouedj@esi-sba.dz',
           subject:contact.subject,
           text:contact.message,
           html:contact.message,
         }).then(() => {
              console.log('Message sent');

         }).catch((error) => {
            console.log(error.response.body)
           // console.log(error.response.body.errors[0].message)
        })
        console.log("after sending Mail");
        // response.redirect('/user')
        response.rediret('user/contact')

})
// ---------------------------------
//Contact Us Session Visitor
router.post('/contact', async(request, response) => {
  var contact=request.body
        console.log(request.body);
        sgMail.send(msg={
           to: 'i.bellaouedj@esi-sba.dz',
           from:contact.email,
           subject:contact.subject,
           text:contact.message,
           html:contact.message,
         }).then(() => {
              console.log('Message sent')
         }).catch((error) => {
            console.log(error.response.body)
           // console.log(error.response.body.errors[0].message)
        })
        console.log("after sending Mail");
})

//------------------------------------------------------------------------------

//Aficher la derniere question
router.get('/',(request,response)=>{
  var sql = "SELECT * FROM message ORDER BY id DESC LIMIT 1";
  var message=request.body.message;
  mysqlConnection.query(sql, function(error, results) {
      if (error) {
          throw error;
      }

      response.render('Home page/index',{
        comment:results
      })

  });})
//------------Afficher la derniere question User session------------------------
//------------Send variabales to the pages User---------------------------------
  router.get('/user',redirectLogin,(request,response)=>{
    var sql = "SELECT * FROM message ORDER BY id DESC LIMIT 1";
    var message=request.body.message;
    mysqlConnection.query(sql, function(error, results) {
        if (error) {
            throw error;
        }
        //=====Notification :
        // var io = require('socket.io')
        // var socket = io("http://192.168.1.33:8080");
        // socket.emit("username",request.session.variabales.name)

        //===================
        response.render('UserPages/user',{
          name: request.session.variabales.name,
          mail:request.session.variabales.mail,
          country:request.session.variabales.country,
          status:request.session.variabales.status,
          gender:request.session.variabales.gender,
          date:request.session.variabales.Date,
          image:request.session.variabales.image,
          register:request.session.register,
          comment:results})
         request.session.register= false
         console.log('Register after render user :===> ',request.session.register);

    });})
// -------------------------------------------------------------------------------

//--------------------( Loisir User Section )-------------------------------------
router.get('/user/loisir',redirectLogin, (request, response) => {
  mysqlConnection.query('select * from place INNER JOIN marchet on place.idP left JOIN resturant on marchet.idM',(err,results)=>{
      if (err) {
          throw err;
      }
      response.render('UserPages/loisir',{
        loisir:results,
        id:request.session.variabales.userId,
        name: request.session.variabales.name,
        mail:request.session.variabales.mail,
        country:request.session.variabales.country,
        status:request.session.variabales.status,
        gender:request.session.variabales.gender,
        date:request.session.variabales.Date,
        image:request.session.variabales.image,
        register:request.session.register,})
  })
})
router.get('/user/loisir2',redirectLogin, (request, response) => {
mysqlConnection.query('SELECT * FROM hotel right join agence ON hotel.idH>0 UNION SELECT * FROM hotel left join agence ON hotel.idH>0',(err,results)=>{
    if (err) {
        throw err;
    }
    response.render('UserPages/loisir2',{
       loisir:results,
       id:request.session.userId,
       name: request.session.variabales.name,
       mail:request.session.variabales.mail,
       country:request.session.variabales.country,
       status:request.session.variabales.status,
       gender:request.session.variabales.gender,
       date:request.session.variabales.Date,
       image:request.session.variabales.image,
       register:request.session.register,})
})
})
//--------------------------------------------------------------------------------

//------------------------(Session Admin)----------------------------------------
router.get('/admin',redirectLogin,(request,response)=>{
  var data1=[];
  var data2=[];
  var listnotifs= [1,2,3,4]
  if (request.session.userId === 45 || request.session.userId === 46 || request.session.userId === 47 )
  {var sql = "SELECT Count(status) as valeur FROM users where status='Omra'";
  mysqlConnection.query(sql, function(error, results) {
      if (error) {
          throw error;
      }

      data1.push({status:'Omra',value:results[0].valeur})

      sql = "SELECT Count(status) as valeur FROM users where status='Hadj'";
      mysqlConnection.query(sql, function(error, results) {
          if (error) {
              throw error;
          }

          data1.push({status:'hadj',value:results[0].valeur})

          sql = "SELECT Count(genre) as valeur FROM users where genre='Homme'";
          mysqlConnection.query(sql, function(error, results) {
              if (error) {
                  throw error;
              }

              data2.push({label:'Homme',value:results[0].valeur})

              sql = "SELECT Count(genre) as valeur FROM users where genre='Femme'";
              mysqlConnection.query(sql, function(error, results) {
                  if (error) {
                      throw error;
                  }

                  data2.push({label:'Femme',value:results[0].valeur})
                  response.render('Admin Pages/admin',{
                    name: request.session.variabales.name,
                    output1:data1,
                    output2:data2,
                    notifs:listnotifs
                  })
              })
          })

      })
  })


    console.log('Register after render Admin :===> ');}
    else { response.redirect("/user")}
  ;})
//-------------------------------------------------------------------------------

module.exports = router;

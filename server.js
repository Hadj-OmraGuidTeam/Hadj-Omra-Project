//---------------Dependencies-----------------
let express = require('express')
let bodyParser = require('body-parser')
let mysqlConnection= require('./config/config')
//--------------------------------------------

// To Check if User are Login
const redirectLogin =(req,res,next)=>{
  if (!req.session.userId){
    res.render('Home page/signup')
  }else {
    console.log(req.session.variabales);
    next()
  }
}
// const redirectHome =(req,res,next)=>{
//   if (req.session.userId){
//     console.log(req.session.userId);
//     // res.render('UserPages/index')
//     res.render('UserPages/index')
//   }else {
//     next()
//   }
// }

//------------------------(middelware)------------------------------------------
// Create server
let app = express()
//For Body Parser to get variabales from HTML Pages
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//this calling api.js which is contain sql commandes to CRUD and Auth operations
app.use('/',require('./config/api'))
//This calling Question.js which is contain sql commandes for Question and response operations
app.use('/',require('./question'))
//This for Admin to control Loisir
app.use('/',require('./assets/js/A_loisir'))
//this calling question.js which is contain sql comma
app.use('/question',require('./question'))
//this for calling the static files .js .css images
app.use( express.static("./assets"))
app.use( "UserPages/loisir",express.static("./assets"))

app.use(express.static(__dirname+"/public"))
//moteur de view
app.set('view engine', 'ejs')
//------------------------------------------------------------------------------

//-----------------------(Notifications)----------------------------------------

//Creating http instance
const httpServer = require('http').createServer(app);
//Creating socket io instance
var io = require('socket.io')(httpServer);
var users=[];
    //Begin function
    io.on("connection",function(socket){
      console.log("User connected ", socket.id);

      //Attach incoming listener for new users
      socket.on("user_connected",function (username){
        //save in Array
        users[username] = socket.id;
        console.log("User name  #######=> :",username);
        console.log("List of Users connected  : ",users);
        io.emit("user_connected",username)
      })
      //To Send Notification about New Question
      socket.on("NewQst",function(message){
        console.log("Sending a notification for the new question ... ");
        socket.broadcast.to(users['admin']).emit("NewQst",message);
      });
      //To Send Notification about New Respense (To : Admin and The Owner of the qst)
      socket.on("NewRes",function(message){
        console.log("Sending a notification for the new response ... ");
        socket.broadcast.to(users[message.To]).emit("NewRes",message);
        socket.broadcast.to(users['admin']).emit("NewRes",message);
      });
    })

    //Remove Disconnected User from Users List
    // socket.on('disconnect',()=>{
    //
    //             for(let i=0; i < this.users.length; i++){
    //
    //                 if(this.users[i].id === socket.id){
    //                     this.users.splice(i,1);
    //                 }
    //             }
    //             socket.emit('exit',this.users);
    //         });


app.get('/Push', (request, response) => {
  response.render('Push',{QstUserName:"Bellaouedj"})
})
app.get('/Push2', (request, response) => {
  response.render('Push2')
})

//------------------------------------------------------------------------------

//------------------------(Routes for pages)------------------------------------
app.get('/', (request, response) => {
  response.render('Home page/index')
})
app.get('/avant_voyage', (request, response) => {
  response.render('Home page/avant_voyage')
})
app.get('/signup', (request, response) => {
  response.render('Home page/signup')
})
app.get('/manasik_omra', (request, response) => {
  response.render('Home page/manasik_omra')
})
app.get('/manasik_hadj', (request, response) => {
  response.render('Home page/manasik-hadj')
})
app.get('/ad3iya', (request, response) => {
  response.render('Home page/ad3iya')
})
app.get('/salat', (request, response) => {
  response.render('Home page/salat')
})
app.get('/forgot', (request, response) => {
  response.render('Home page/forgot-pass')
})
app.get('/A_loisir',redirectLogin, (request, response) => {
  response.render('UserPages/A_loisir')
})
//------------------------------------------------------------------------------

//-------------------(Routes For Users)-----------------------------------------
app.get('/use',redirectLogin,(request, response)=>{
  response.render('UserPages/index')
})
app.get('/user',redirectLogin,(request, response)=>{
  response.render('UserPages/user',request.session.variabales)
})
app.get('/user/transport',redirectLogin,(request, response)=>{
  response.render('UserPages/transport',request.session.variabales)
})
app.get('/user/hopitaux',redirectLogin,(request, response)=>{
  response.render('UserPages/hopitaux',request.session.variabales)
})
app.get('/user/fi9h_hadj',redirectLogin,(request, response)=>{
  response.render('UserPages/fi9h_hadj',request.session.variabales)
})
app.get('/user/avant_voyage',redirectLogin, (request, response) => {
  response.render('UserPages/avant_voyage',request.session.variabales)
})
app.get('/user/manasik_omra',redirectLogin, (request, response) => {
  response.render('UserPages/manasik_omra',request.session.variabales)
})
app.get('/user/manasik-hadj',redirectLogin, (request, response) => {
  response.render('UserPages/manasik-hadj',request.session.variabales)
})
app.get('/user/ad3iya',redirectLogin, (request, response) => {
  response.render('UserPages/ad3iya',request.session.variabales)
})
app.get('/user/salat',redirectLogin, (request, response) => {
  response.render('UserPages/salat',request.session.variabales)
})
// app.get('/user/loisir',redirectLogin, (request, response) => {
//   mysqlConnection.query('select * from place INNER JOIN marchet on place.idP left JOIN resturant on marchet.idM',(err,results)=>{
//       if (err) {
//           throw err;
//       }
//       response.render('UserPages/loisir',{loisir:results},request.session.variabales)
//   })
//   // response.render('UserPages/loisir',request.session.variabales)
// })
// app.get('/user/loisir2',redirectLogin, (request, response) => {
//   //=========
//
//
//
// })
app.get('/user/hadj-ifrad',redirectLogin, (request, response) => {
  response.render('UserPages/hadj-ifrad',request.session.variabales)
})
app.get('/user/hadj-kiran',redirectLogin, (request, response) => {
  response.render('UserPages/hadj-kiran',request.session.variabales)
})
app.get('/user/hadj-tamato3',redirectLogin, (request, response) => {
  response.render('UserPages/hadj-tamato3',request.session.variabales)
})
app.get('/form',redirectLogin,(request, response) => {
  response.render('UserPages/form',request.session.variabales)
})
app.get('/admin',(request, response) => {
  response.render('Admin Pages/admin',request.session.variabales)
})
app.get('/user/contact',redirectLogin, (request, response) => {
  response.render('UserPages/user',request.session.variabales)
})
//------------------------------------------------------------------------------

app.post('/', (request, response) => {
  console.log(request.body);
  if (request.body.message === undefined || request.body.message === '') {
    response.redirect('/')
  }
})
//----------------------------------------------------------------------

//Listing to the server
// //
// app.listen(8080, ()=>{
//   console.log('Server is running on port 8080...');
// })
// //
httpServer.listen(8080, () => {
  console.log('go to http://localhost:8080');
});

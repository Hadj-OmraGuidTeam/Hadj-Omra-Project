
const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
var mysqlConnection=require('../../config/config');
let router = express.Router();
//set storage engine
const storage=multer.diskStorage({
    destination:'./public/uploads/',
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
//Init upload
//-----------upload resturant's images----------------//
const upload=multer({
    storage:storage
}).single('myImage');
//-----------upload places images----------------//
const uploadP=multer({
    storage:storage
}).single('myImageP');

//-----------upload marchets images----------------//
const uploadM=multer({
    storage:storage
}).single('myImageM');
//-----------upload hotel images----------------//
const uploadH=multer({
    storage:storage
}).single('myImageH');
//-----------upload Agence images----------------//
const uploadA=multer({
    storage:storage
}).single('myImageA');

//-----------get admin page----------------//
router.get('/admin',(rea,res)=>{
    res.render('pages/A_loisir')
})
//-----------loisir1 page----------------//

//-----------get loisir page----------------//
router.get('/loisir',(request,response)=>{
    mysqlConnection.query('select * from place INNER JOIN marchet on place.idP left JOIN resturant on marchet.idM',(err,results)=>{
        if (err) {
            throw err;
        }
        response.render('Home page/loisir',{loisir:results})
    })



    })
    //-----------get loisir2 page----------------//
router.get('/loisir2',(request,response)=>{
    mysqlConnection.query('SELECT * FROM hotel right join agence ON hotel.idH>0 UNION SELECT * FROM hotel left join agence ON hotel.idH>0',(err,results)=>{
        if (err) {
            throw err;
        }
        response.render('Home page/loisir2',{loisir:results})
    })



    })
    //-----------Post for resturants----------------//
    // create table resturant(idP INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(44),dsc VARCHAR(255),path VARCHAR(255));
    router.post('/upload',(req,res)=>{
upload(req,res,(err)=>{
    if(err){
        res.render('pages/A_loisir', {
          msg: err
        });}else{
            console.log(req.file);

            mysqlConnection.query('INSERT INTO resturant SET name=?,path=?,dsc=?',[req.body.name,req.file.filename,req.body.place],(err,results,fields)=>
            {
                if (err) {
                    return console.error(err.message);
                  }
                  console.log('Todo Id:' + results.insertId);
                  res.redirect('admin')

            })
        }
})
    })
    //-----------Post for Places----------------//
    // create table place(idP INT AUTO_INCREMENT PRIMARY KEY,nameP VARCHAR(44),dscP VARCHAR(255),pathP VARCHAR(255))
    router.post('/uploadP',(req,res)=>{
        uploadP(req,res,(err)=>{
            if(err){
                res.render('pages/A_loisir', {
                  msg: err
                });}else{
                    console.log(req.file);

                    mysqlConnection.query('INSERT INTO place SET nameP=?,pathP=?,dscP=?',[req.body.nameP,req.file.filename,req.body.placeP],(err,results,fields)=>
                    {
                        if (err) {
                            return console.error(err.message);
                          }
                          console.log('Todo Id:' + results.insertId);
                          res.redirect('admin')

                    })
                }
        })
            })
            //-----------Post for marchets----------------//
            //create table marchet(idM INT AUTO_INCREMENT PRIMARY KEY,nameM VARCHAR(44),dscM VARCHAR(255),pathM VARCHAR(255))
            router.post('/uploadM',(req,res)=>{
                uploadM(req,res,(err)=>{
                    if(err){
                        res.render('pages/A_loisir', {
                          msg: err
                        });}else{
                            console.log(req.file);

                            mysqlConnection.query('INSERT INTO marchet SET nameM=?,pathM=?,dscM=?',[req.body.nameM,req.file.filename,req.body.placeM],(err,results,fields)=>
                            {
                                if (err) {
                                    return console.error(err.message);
                                  }
                                  console.log('Todo Id:' + results.insertId);
                                  res.redirect('admin')

                            })
                        }
                })
                    })
                    //-----------end of loisir1 page----------------//
                    //create table Hotel(idH INT AUTO_INCREMENT PRIMARY KEY,nameH VARCHAR(44),pathH VARCHAR(255),prix VARCHAR(255),avis VARCHAR(255));
                    router.post('/uploadH',(req,res)=>{
                        uploadH(req,res,(err)=>{
                            if(err){
                                res.render('pages/A_loisir', {
                                  msg: err
                                });}else{
                                    console.log(req.file);

                                    mysqlConnection.query('INSERT INTO hotel SET nameH=?,pathH=?,prix=?,avis=?',[req.body.nameH,req.file.filename,req.body.priceH,req.body.avis],(err,results,fields)=>
                                    {
                                        if (err) {
                                            return console.error(err.message);
                                          }
                                          console.log('Todo Id:' + results.insertId);
                                          res.redirect('admin')

                                    })
                                }
                        })
                      })
                      // /create table Agence(idA INT AUTO_INCREMENT PRIMARY KEY,nameA VARCHAR(44),pathA VARCHAR(255),dscA VARCHAR(255),prixA VARCHAR(255),avis VARCHAR(255));
                            router.post('/uploadA',(req,res)=>{
                                uploadA(req,res,(err)=>{
                                    if(err){
                                        res.render('pages/A_loisir', {
                                          msg: err
                                        });}else{
                                            console.log(req.file);

                                            mysqlConnection.query('INSERT INTO agence SET nameA=?,pathA=?,dscA=?,prixA=?',[req.body.nameA,req.file.filename,req.body.desA,req.body.priceA],(err,results,fields)=>
                                            {
                                                if (err) {
                                                    return console.error(err.message);
                                                  }
                                                  console.log('Todo Id:' + results.insertId);
                                                  res.redirect('admin')

                                            })
                                        }
                                })
                                    })

module.exports = router;

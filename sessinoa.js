

 /**                                                   Sassion                                            */



 // You can track user and its activity using sassion 
 // for session you need to install a new module ' express-session'

 const express = require ('express')
 const app = express()
 const session = require('express-session')

 const PORT = process.env.PORT || 3000

 app.use(session({
     secret:'your secret key ',
     resave:true,
     saveUninitialized:true
 }))

 app.get('/',(req,res)=>{
  req.session.name = "John"
  return res.send("session set")
 })

 app.get('/session',(req,res)=>{
  var name = req.session.name
  return res.send(name)
 })

app.listen(PORT,(req,res)=> {
    console.log('the surver is running ...')
})
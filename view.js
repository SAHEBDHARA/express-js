

//                                                            Views in Expre

// 


 const express = require('express')
 const app = express()

 const PORT = 3000;
  
 app.set('view engine','pug')

 app.get('/',(req,res)=>{
  res.render('index',{title:'this is the title ', heading :'this the heading', p:'this the paragraph'})
 }).listen(PORT)
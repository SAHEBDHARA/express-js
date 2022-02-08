

 //                                        routing with express

 // this is one of the most important topic in the express application 
  const express = require('express')
  const app = express()

  const PORT = process.env.PORT || 3000

   const data = {
       id: 1,
       name:'saheb'
   }



  


   app.get('/',(req,res)=>{
       res.end("wallcome to the dashbord")
   })

    app.get('/home',(req,res)=>{
        res.sendFile("this the home page")
    })

    app.get('/about',(req,res)=>{
        res.json(data)
    })

    app.listen(PORT,()=>console.log(`the server is started in port:${PORT}`))

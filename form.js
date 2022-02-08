
//                                                    Simple Form

const express = require('express')

const path = require('path')
const app = express()

const PORT  = process.env.PORT|| 3000

// use a middleware function 
app.use(express.urlencoded({
    extended:true
}))

// to define the directary 
app.set("views",path.join(__dirname,'views'))
app.set('view engine','pug');


app.get('/',(req,res)=>{
    // res.send(" this is the form")
    res.render('index',{title: 'forme handeling'})
})

// createing a post request to print the data 
app.post('/form_submit',(req,res)=>{
    const username = req.body.name
    const email = req.body.email
    res.end(`your username is ${username} and Email is ${email} `)
})


app.listen(PORT,()=>console.log(`listining to the requist on the port ${PORT}`))




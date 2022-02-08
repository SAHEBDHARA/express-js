            //                              Serving Static files in Express 


// To serve static files such as image,css files


const express = require("express")

const app = express()


// use method is use to call middleware function.
app.use(express.static('public'));
// in this statement you tell the server to access all the file from public folder
// you can use this method for multiple folder
app.use('/public',express.static('static'))
// this commant for the dir under the rooot file 

app.get('/',(req,res)=>{
 res.send(public)
}).listen(3000,()=>console.log("started on 3000"))
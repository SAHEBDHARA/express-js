/**            cookies           */




const express = require("express")
const app = express()


const PORT = process.env.PORT||3000

app.get('/',(req,res)=>{
    res.send("this is cookies tutorial")
})

app.listen(PORT,()=>{
    console.log('the port is running....S')
})
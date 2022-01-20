

const express = require("express")

const app = express()

app.get("/ping",(req,res)=>{
    res.send("express and node application")
}).listen(3000,()=>console.log("started"))

// to restart the server to save changes

// we need to install nodeman and start depandences and just type to the terminal "start"
// using thid nodeman module you don't have to restart your server to make any changes to your node application.

/**                                    MIDDLWARE            */


// IT can make three function 1) req & res , 2) End Cycle, 3) next()

const express = require("express");
const app = express();
const mylogger = function(req,res,next){
    console.log("logged")
    next();
}

app.use(mylogger)

app.get('/',function(req,res){
    res.send("hone routed");
}).listen(3000,()=>console.log("application started"))

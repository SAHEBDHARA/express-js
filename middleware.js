/**                                    MIDDLWARE            */


// IT can make three function 1) req & res , 2) End Cycle, 3) next()
// 

const express = require("express");
const req = require("express/lib/request");


const app = express();

// creating a middleware function
const mylogger = function(req,res,next){
    console.log("logged")
    next();
}
// creating a 2nd middleware function
const requestTime = function(rep,res,next){
    req.reqTime = Date.now()
    next()
}

// i need to use the use mathod to use the middleware
app.use(mylogger)
app.use(requestTime)

// here the first use middleware function will exicute first. When we are using the use function the node application will put the middleware into a call stack.
// at this call stack we are putting the myLogger at the first position and reqTime at the second position, then the middleware callstack will exicute the function one by one.
// So it will first exicute the myLogger function and then using the next function it moves the next middleware because the current middleware prossing is compleately finnishd


app.get('/',function(req,res){
    res.send(`current time:${req.reqTime}`);
}).listen(3000,()=>console.log("application started"))

// whenever the the apps is geting request is it displays a massages to the terminal
// midleware is the best place where you can add login and authentication page. 
// in the middleware function who will be loaded first will exicuted first.


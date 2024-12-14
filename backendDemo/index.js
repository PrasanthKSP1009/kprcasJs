var express = require('express')
var path = require('path')
var app = express()

app.get('/',(req,res)=>{
    const filePath = path.join(__dirname,'../index.html')
    res.sendFile(filePath)
})
app.listen(3001, ()=>{
    console.log("Backend Server Started Sucessfully");
})
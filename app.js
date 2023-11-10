require('dotenv').config()

const express = require('express')

const app = express()

const port = process.env.PORT 




app.get('/home',(req,res)=> {
    res.send("this is home page")
})



app.get('/elon',(req,res)=> {
    res.send("hey this is elon musk")
})



app.listen(port,()=> {
    console.log(`server running at ${port}!`)
})


















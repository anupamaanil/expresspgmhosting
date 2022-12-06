var express=require('express')
var bodyParser = require('body-parser')

var app=express()
app.use(bodyParser.urlencoded({ extended: false }))
  
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Welcome Girl :)")
})

app.post('/read',(req,res)=>{
    var getName=req.body.name
    var getRoll=req.body.rollno

    res.json( {"Name":getName,"Roll no":getRoll} )

})


app.listen( process.env.PORT || 3000,()=>{
    console.log("Server started at http://localhost:3000/")
})
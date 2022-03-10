//before using belwo equire command first time, use git bash in this folder for <npm install express> 

const express = require("express")

const app = express()
const PORT = 5000


//this is where it is different from server.js file
function echoPortNumber() {
    console.log(`Listening on port ${PORT}`)
    console.log("Listening on port", PORT)
}
app.listen(PORT,echoPortNumber())

function hello(req,res) {
    res.send('Hello World')
}

const hello2 = (req,res) => {       //another way
    res.send('Hello world! 2')
}


app.get('/',hello)
app.get('/hello2',hello2)

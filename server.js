//before using belwo equire command, use git bash in this folder for <npm install express> 

const express = require("express")

const app = express()
const PORT = 4000

app.listen(PORT,function(){
    console.log(`Listening on port ${PORT}`)
})

app.get('/',(request, response)=>{
    response.send('Hello World')
})


// just for my info, command in terminal to kill a port is <npx kill-port 4000> 4000 here is the port number to be killed
// just for my info, Ctrl+C to kill node (even to kill while loop) and Ctrl+D to stop node.

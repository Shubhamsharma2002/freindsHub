const express = require('express');
const port = 8000;

const app = express();
app.listen(port,function(err){
    if(err){
        console.log("getting error", err);
    }
    console.log("fired sucessfully on server no :", port);
})

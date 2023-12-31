const express = require('express');
const cookipareser = require('cookie-parser');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookipareser());
app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views','./views');


app.use('/', require('./rotres'));
app.listen(port,function(err){
    if(err){
        console.log("getting error", err);
    }
    console.log("fired sucessfully on server no :", port);
})

const express = require('express')
const app = express()
const urlprefix = '/api'

//integrating MongoDB using Mongoose
//=========================================================================================================================
//https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
const mongoose = require('mongoose')
const Post = require('./models/post')
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = { 
    server: {sslCA: cert}};

const connstring = "mongodb+srv://Tristan:5h9EwkuHeiaL5JUO@cluster0.m3p8nfa.mongodb.net/?retryWrites=true&w=majority";

const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

mongoose.connect(connstring)
.then(() => 
{
    console.log('connected :-)')
})
.catch(() =>
{
    console.log('NOT connected :-(')
}, options);

app.use(express.json())

// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((reg,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

// https://expressjs.com/en/4x/api.html#app.get
app.get(urlprefix+'/', (req, res) => {
    res.send('Hello World')
})

app.use(urlprefix+'/posts', postRoutes)
app.use(urlprefix+'/users', userRoutes)

module.exports = app;


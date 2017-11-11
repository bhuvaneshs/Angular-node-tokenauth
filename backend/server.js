//import { request } from 'https';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var User = require('./models/User.js');

var posts = [
    { message: 'hello'},
    { message: 'hi'}
]
app.use(cors());
app.use(bodyParser.json());
app.get('/posts',(req,res) => {
    res.send(posts)
})
app.post('/register',(req,res) => {
    var UserData = req.body;

    var user = new User(UserData);

    user.save((err,result) => {
        if(err)
          console.log('saving user error')

        res.sendStatus(200);
    })
    
})

mongoose.connect('mongodb://test:test@ds259085.mlab.com:59085/angularauth',{ useMongoClient:true },(err) =>{
    if(!err)
    console.log('Connected to Mongo');
});
app.listen(3000)
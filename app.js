var express = require('express');
var app = express();

var path = require('path');

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/style.css',express.static(path.join(__dirname,'/style.css')));
app.use('/index.js',express.static(path.join(__dirname,'/index.js')));
app.use('/articleMenu1.html', express.static(path.join(__dirname, '/articleMenu1.html')));
app.use('/articleMenu2.html', express.static(path.join(__dirname, '/articleMenu2.html')));
app.use('/articleMenu3.html', express.static(path.join(__dirname, '/articleMenu3.html')));
app.use('/articleMenu4.html', express.static(path.join(__dirname, '/articleMenu4.html')));
app.use('/articleMenu5.html', express.static(path.join(__dirname, '/articleMenu5.html')));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
    
});


app.get('/articleMenu1', function(req,res){

    res.sendFile(path.join(__dirname + '/index.html'));
});



app.get('/articleMenu2', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.get('/articleMenu3', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/articleMenu4', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/articleMenu5', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});



// viewed at http://localhost:8888
app.listen(8888);
console.log('I am listening at 8888');


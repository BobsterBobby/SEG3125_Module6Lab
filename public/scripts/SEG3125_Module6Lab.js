var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('this is the homepage');
});

app.get('/analysis', function(req, res){
    res.send('this is the analysis page');
});

app.listen(3000);


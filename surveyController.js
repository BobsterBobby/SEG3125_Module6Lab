var bodyParser = require('body-parser');

var data = [{item: '1'}, {item: '2'}, {item: '3'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){


    
    app.get('/survey', function(req, res){
        res.sendFile(__dirname+'/views/index.html');
    });

    
    app.post('/survey', urlencodedParser, function(req, res){
        res.send('this is the analysis page');
    });
    
    app.get('/analysis', function(req, res){
        res.render('analysis', {analysis: data});
    });
};
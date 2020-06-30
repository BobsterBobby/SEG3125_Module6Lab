var data = [{item: '1'}, {item: '2'}, {item: '3'}]

module.exports = function(app){


    
    app.get('/survey', function(req, res){
        res.sendFile(__dirname+'/views/index.html');
    });

    app.get('/analysis', function(req, res){
        res.render('analysis', {analysis: data});
    });

    app.post('/analysis', function(req, res){
        res.send('this is the analysis page');
    });

};
module.exports = function(app){
    app.get('/homepage', function(req, res){
        res.render('homepage');
    });

    app.get('/button-click', function(req, res){
        res.render('cardquery');
    });

    app.post('/homepage', function(req, res){

    });

    app.delete('/homepage', function(req, res){

    });
};
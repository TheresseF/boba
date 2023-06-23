module.exports = function(app){
    app.get('/home', function(req, res){
        res.render('home');
    });

    app.post('/home', function(req, res){

    });

    app.delete('/home', function(req, res){

    });
};
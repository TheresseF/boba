module.exports = function(app){
    app.get('/homepage', function(req, res){
        res.render('homepage');
    });

    app.get('/cardquery-button-click', function(req, res){
        res.render('cardquery');
    });

    app.get('/order-button-click', function(req, res){
        res.render('finalorder');
    });

    app.post('/homepage', function(req, res){

    });

    app.delete('/homepage', function(req, res){

    });
};
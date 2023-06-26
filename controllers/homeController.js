module.exports = function(app){
    app.get('/homepage', function(req, res){
        res.render('homepage');
    });

    app.get('/cardquery', function(req, res){
        res.render('cardquery');
    });

    app.get('/order', function(req, res){
        res.render('finalorder');
    });

    app.get('/arrow-button-click', function(req, res){
        res.render('homepage');
    });

    app.get('/logo-button-click', function(req, res){
        res.render('homepage');
    });

    app.get('/logotext-button-click', function(req, res){
        res.render('homepage');
    });

    app.get('/popuporder-button-click', function(req, res){
        res.render('finalorder1');
    });


    app.post('/homepage', function(req, res){

    });

    app.delete('/homepage', function(req, res){

    });
};
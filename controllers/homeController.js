module.exports = function(app){
    app.get('/', function(req, res){
        res.render('homepage');
    });

    app.get('/card_query', function(req, res){
        res.render('cardquery');
    });

    app.get('/order', function(req, res){
        res.render('finalorder');
    });

    app.get('/popuporder-button-click', function(req, res){
        res.render('finalorder1');
    });

    app.post('/homepage', function(req, res){

    });

    app.delete('/homepage', function(req, res){

    });
};
module.exports = function(app){
    app.get('/button-click', function(req, res){
        res.render('cardquery');
    });

    // app.get('/cardquery', function(req, res){
    //     res.render('cardquery');
    // });

    app.post('/cardquery', function(req, res){

    });

    app.delete('/cardquery', function(req, res){

    });
};
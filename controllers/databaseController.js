
module.exports = function(app){
    app.get('/homepage', function(req, res){
        res.render('homepage');
    });
};
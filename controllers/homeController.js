module.exports = function(app){
    // Homepage
    app.get('/', function(req, res){
        res.render('homepage');
    });

    // Card Query Page
    app.get('/card_query', function(req, res){
        res.render('cardquery');
    });

    // Card Query 1 : Log In
    app.get('/log_in', function(req, res){
        res.render('cardquery1')
    })
    
    // Reveal : Points
    app.get('/view_points', function(req, res){
        res.render('reveal')
    })

    // Activate Card
    app.get('/activate_crd', function(req, res){
        res.render('activatecard')
    })

    // Order Page
    app.get('/order', function(req, res){
        res.render('finalorder');
    });

    //Payment page
    app.get('/payment', function(req, res){
        res.render('finalpayment')
    })

    //Check Out Page
    app.get('/check_out', function(req, res){
        res.render('finalcheckout')
    })



    app.get('/popuporder-button-click', function(req, res){
        res.render('finalorder1');
    });

    app.post('/homepage', function(req, res){

    });

    app.delete('/homepage', function(req, res){

    });
};
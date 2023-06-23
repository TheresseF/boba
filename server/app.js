var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencoderParser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
app.use('/CSS', express.static('CSS'));

app.get('/home', function(req,res){
    res.render('../EJS/');
});

app.listen(3000);


// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var myReadStream = fs.createReadStream(__dirname + '../../Customer/HOMEPAGE.html', 'utf8');
//     myReadStream.pipe(res);


// //     if(req.url === '/home' || req.url === '/'){
// //         res.writeHead(200, {'Content-Type': 'text/html'});
// //         fs.createReadStream(__dirname + '../../Customer/HOMEPAGE.html').pipe(res);
// //         // myReadStream.pipe(res);
// //     } 
// //     else if(req.url === '/order'){
// //         res.writeHead(200, {'Content-Type': 'text/html'});
// //         fs.createReadStream(__dirname + '../../Customer/Order/FINALORDER1.html').pipe(res);
// //     }
    
// });


// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');
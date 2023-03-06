var express = require('express');
var app = express();


//Route handler
app.get('/hihi', function(req, res){
   res.send("Hihi there");
   next();
});


//First middleware before response is sent
app.use(function(req, res, next){
   res.send("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

//Route handler
app.get('/hello', function(req, res, next){
   res.send("Hello there");
   next();
});

//First middleware before response is sent
app.get('/somereq/:id([0-9]{5})', function(req, res, next){
   res.send('id: ' + req.params.id);
   next();
});


app.get('/', function(req, res){
   res.send('Now at the End');
});

app.use('/', function(req, res){
   res.send('End');
});

app.listen(4000);

var express = require('express');
var app = express();


//Route handler
app.get('/hihi', function(req, res){
   res.send("Hihi there");
   next();
});


//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
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
app.use('/somereq/:id([0-9]{5})', function(req, res, next){
   console.log("Start");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(4000);

var express = require('express');
var app = express();

var msg="";  //Use msg to collect messages to be send together to the client

//First middleware before response is sent
app.use(function(req, res, next){
//-   res.send("Start..."); //Cannot do this and still send more output to client
   msg +="Start... ";  //So we will collect output in "msg"
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("You did not send me anything");
});

//Route handler
app.get('/hihi', function(req, res){
   res.send("Hihi there");
});

//Route handler
app.get('/hello', function(req, res, next){
//   res.send("Hello there"); //We will not do this; we will use middleware
   msg +="hello there";
   next();
});

//Route handler with a parameter: Ex 1
app.get('/reqA/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

//Route handler with a parameter: Ex 2
app.get('/reqB/:id([0-9]{5})', function(req, res, next){
   //   res.send('id: ' + req.params.id);
      msg +='id: ' + req.params.id;
      next();
   });
   

// Middleware attached to all routes
app.use(function(req, res, next){
   msg +=' Now at Footer ';
   next();
});

// Middleware attached to all routes; Terminates (no "next")
app.use(function(req, res){
   msg +='End';
   res.send(msg);
   msg="";
});

app.listen(3000);

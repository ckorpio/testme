// About cookies
const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const port = 3000;

app.listen(port);
console.log('Server started at http://localhost:' + port);

// Middleware to handle jsons and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes go here

//Default route handler
app.get('/', function(req, res, next){
  res.send("You did not send me anything");
});


//  How to check a cookie
app.post('/showcookie/:testcookie', function(req, res) {
  var cookienam = req.params.testcookie
  var cookie = req.cookies.cookienam;  // check if client sent cookie
  if (cookie === undefined) { 
    res.send('No such cookie has been set');
  } else {
    res.send('Cookie ' + cookienam +' has been set');
  }
});


//  How to set a cookie
app.post('/setcookie/:testcookie', function(req, res) {
  var cookienam = req.params.testcookie
  var cookie = req.cookies.cookienam;  // check if client sent cookie
  res.cookie(cookienam, 'cook12345', { maxAge: 180, httpOnly: true });
  console.log('cookie created successfully');
});

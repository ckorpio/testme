const express = require('express');

const app = express();
const port = 3000;


// Middleware to handle jsons and URL encoded data
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes go here

// A route with a parameter (access: URI/api/someVersionString)
app.get('/api/paramData/:version', function(req, res) {
  res.send(req.params.version);
});

// Middleware applies to parameter 'name'
app.param('name', function(req, res, next, name) {
  const modified = name.toUpperCase();
  req.name = modified;
  next();
});


// A simple route using parameter 'name'(to be accessed as URI/api/users/someName)
app.get('/api/users/:name', function(req, res) {
  res.send('Hello ' + req.name + '!');
});


// How to grab data from a query string (Form using GET)
app.get('/myGetStuff', function(req, res) {
  const myquery = req.query;
  
  var outstring = '';
  for(var key in myquery) { outstring += "--" + key + ">" + myquery[key]; }
  //);
 
  res.send(outstring);

});


// -------------------------
var url = require('url');
app.get('api/myGetData', function(req, res) {
  var thequery = url.parse(req.url, true).query;
 // const alldata = req.thequery;
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

  res.send('alldata is: ' + alldata + ' from thequery: ' + thequery);
  res.end({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});


// How to grab data from a POST request (Form using POST)
app.post('/api/users', function(req, res) {
  const user_id = req.body.id;
  const token = req.body.token;
  const geo = req.body.geo;

  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});


app.listen(port);
console.log('Server started at http://localhost:' + port);

//----------->>> discard
// How to grab data from a query string (Form using GET)
var url = require('url');
app.get('/api/myGetData2', function(req, res) {
  var thequery = url.parse(req.url, true).query;
  const alldata = req.query;
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

  res.send(alldata + ' - ' + thequery);
  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});


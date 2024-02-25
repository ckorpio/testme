const express = require('express');

const app = express();
const port = 3000;


// Middleware to handle jsons and URL encoded data
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes go here

//Default route handler
app.get('/', function(req, res, next){
  res.send("You did not send me anything");
});


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
// May be accessed as /myGetStuff?mykey1=111&mykey2=222&mykey3=abcd
app.get('/myGetStuff', function(req, res) {
  const myquery = req.query;
  
  var outstring = '';
  for(var key in myquery) { outstring += "--" + key + ">" + myquery[key]; }
  //);
 
  res.send(outstring);

});


app.listen(port);
console.log('Server started at http://localhost:' + port);

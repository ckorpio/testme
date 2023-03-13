const express = require('express');
const bodyParser=require('body-parser');
const api = require('./api');

const mongoose = require('mongoose');

const app = express();
const port = 3000;


app.listen(port);
console.log('Server started at http://localhost:' + port);

// ------>>>Step 5.1
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ------<<<Step 5.1

app.use('/api', api);

// routes will go here


// ------Step 2

app.get('/api/users', function(req, res) {
  const myquery = req.query;
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;
  
  var outstring = '';
  for(var key in myquery) { outstring += "--" + key + ">" + myquery[key]; }
 
  res.send(outstring);

  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});


// ------Step 3

app.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

// ------Step 4// From: https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters

const express = require('express');

const app = express();
const port = 3000;

var fs = require("fs");

// ------>>>Step 5.1
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ------<<<Step 5.1


// routes will go here


// ------Step 2

app.get('/users', function(req, res) {
  const myquery = req.query;
  
  var outstring = '';
  for(var key in myquery) { outstring += "--" + key + ">" + myquery[key]; }
 
  res.send(outstring);

  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;
  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});


// ------Step 2.file

app.get('/wfile', function(req, res) {
  const myquery = req.query;
  
  var outstring = '';
  for(var key in myquery) { outstring += "--" + key + ">" + myquery[key]; }
  fs.appendFile("mydata.txt", outstring+'\n', (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("Contents of file now:\n");
      console.log(fs.readFileSync("mydata.txt", "utf8"));
    }
  });
 
  res.send(outstring);

});


// ------Step 3


app.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

// ------Step 4
app.param('name', function(req, res, next, name) {
  const modified = name.toUpperCase();

  req.name = modified;
  next();
});

// routes will go here
// ...

app.get('/api/users/:name', function(req, res) {
  res.send('Hello ' + req.name + '!');
});


// ------>>>Step 5.2

app.post('/post/users', function(req, res) {
  const user_id = req.body.id;
  const token = req.body.token;
  const geo = req.body.geo;

  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});
// ------<<<Step 5.2



app.param('name', function(req, res, next, name) {
  const modified = name.toUpperCase();

  req.name = modified;
  next();
});

// routes will go here
// ...

app.get('/api/users/:name', function(req, res) {
  res.send('Hello ' + req.name + '!');
});


// ------>>>Step 5.2

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
// ------<<<Step 5.2



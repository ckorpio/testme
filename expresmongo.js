const express = require('express');
const bodyParser=require('body-parser');
// const api = require('./api');

// const mongoose = require('mongoose');

const app = express();
const port = 3000;


app.listen(port);
console.log('Server started at http://localhost:' + port);

//---->>> From Mongo about using with Node
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://classuser:cmps415class@ckmdb.5oxvqja.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("ckmdb").collection("cmps415");
  // perform actions on the collection object
  
  // find code goes here
  const cursor = coll.find({ partID: 12345 });
  cursor.forEach(console.log);
  
  client.close();
});

// --------<<< From Mongo


// ------>>>Step 5.1
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ------<<<Step 5.1


// routes will go here

app.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

// ------>>>Step 5.1
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ------<<<Step 5.1



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


// ------Step 4
app.param('name', function(req, res, next, name) {
  const modified = name.toUpperCase();

  req.name = modified;
  next();
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


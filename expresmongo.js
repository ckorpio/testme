const express = require('express');
const bodyParser=require('body-parser');
// const api = require('./api');

// const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to handle jsons and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes go here

//Default route handler
app.get('/', function(req, res, next){
  res.send("You did not send me anything");
});

app.get('/sdb', function(req, res){
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
});


app.listen(port);
console.log('Server started at http://localhost:' + port);

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;


// ------>>>Step 5.1
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ------<<<Step 5.1


// routes will go here


// ------Step 2

app.get('/api/users', function(req, res) {
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

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


app.listen(port);
console.log('Server started at http://localhost:' + port);

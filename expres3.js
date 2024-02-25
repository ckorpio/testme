const express = require('express');

const app = express();
const port = 3000;
// const port = process.env.PORT || 8080;


// Middleware to handle jsons and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes go here

//Default route handler
app.get('/', function(req, res, next){
  res.send("You did not send me anything");
});




// File system

var fs = require("fs");


// Write data obtained from a GET request into a file

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



app.listen(port);
console.log('Server started at http://localhost:' + port);

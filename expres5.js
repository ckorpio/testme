const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const port = 3000;
var fs = require("fs");

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


//  How to grab data from a POST request
app.post('/post/users', function(req, res) {
  const formBody= req.body;
  var outstring='';
  for(var key in formBody) { outstring += "--" + key + ">" + formBody.key; }

  res.send('The formBody is: ' + JSON.stringify(formBody) + '<br>The outstring is: ' + outstring);
});


// Using a local file to generate a web form (like post.html)
app.get("/getfile",function(req,res) {
  fs.readFile('post.html','utf8',(err,data)=>{
    console.log(data)
    if(err){
      res.send('some err occured ',err);
    }
    res.send(data);
  })
})

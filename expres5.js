var express = require('express')
var cookieParser = require('cookie-parser') //needed for cookies
// Make sure package.json contains:
// "dependencies": {
//    "express": "^4.18.2",
//    "cookie-parser": "~1.4.4"
//  }

var app = express();
app.use(cookieParser()); //needed for cookies

// Default route
app.get('/', function (req, res) {
  res.send("You did not send me anything");
});

// Setting cookies
app.get('/setcookie', function (req, res) {
  console.log('setcookie');
  res.cookie('name', 'Abcd') //Sets name = Abcd, no expiration
  res.cookie('cook2', 'xyz', {maxAge : 20000});  //Sets cook2 = xyz expiring in 20 seconds 
// Additional notes:
// The following sets cook2 = xyz, no expiration, but prevents client-side script access to the cookie 
// res.cookie('cook2', 'xyz', {HttpOnly: true});  //no expiration; prevents client-side script access  
// The following sets cook2 = xyz expiring in 20 seconds and tells the browser to not allow client-side script access 
// res.cookie('cook2', 'xyz', {HttpOnly: true, maxAge : 20000});  //expires; prevents client-side script access 

  res.send('cookies set ');  // complete sending
});

// Access and show cookies
app.get('/showcookie', function (req, res) {
  mycookies=req.cookies;
  res.send(mycookies); //Send the cookies
});

// Clear a specific cookie (sent as parameter)
app.get('/clearcookie/:cookiename', function (req, res) {
  res.clearCookie(req.params.cookiename); //Shortcut for setting expiration in the past
  res.send('Cookie deleted' + req.params.cookiename);
});

// Report cookies on console and browser
app.get('/report', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies);

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies);

  //Send the cookies report to the browser
  mycookies=req.cookies;
  res.send(JSON.stringify(mycookies) + "Done reporting");
});

// The following is an alternative to just doing:
// app.listen(3000)
// Note the use of placeholders in reporting an output string
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

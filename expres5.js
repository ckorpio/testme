var express = require('express')
var cookieParser = require('cookie-parser') //s1

var app = express();
app.use(cookieParser()); //s2

// Default route
app.get('/', function (req, res) {
  res.send("You did not send me anything");
});

// Setting cookies
app.get('/setcookie', function (req, res) {
  console.log('setcookie');
  res.cookie('name', 'Abcd') //Sets name = Abcd
  res.cookie('cook2', 'xyz', {maxAge : 20000});  //Sets cook2 = xyz expiring in 20 seconds 
  res.send('cookies set ');  // complete sending
});

// Access and show cookies
app.get('/showcookie', function (req, res) {
  mycookies=req.cookies;
  res.send(mycookies); //Send the cookies
  //res.send("You did not send me anything");
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
  res.send(JSON.stringify(mycookies)  "Done reporting");
});

app.listen(3000)

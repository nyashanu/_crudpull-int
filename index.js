// Database & ..
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds015878.mlab.com:15878/heroku_q0q4cd13');
var db = mongoose.connection;
// Database & ..

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/private_beta', function(request, response) {
  response.render('pages/private_beta');
});

app.get('/login', function(request, response) {
  response.render('pages/login');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var express = require('express');
var http = require('http');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var configDB = require('./config/database.js');	
// chnage the URL
mongoose.connect(configDB.url);

// Calling this in routes.js
//var events = require('./app/models/user.js');

app.use(morgan('dev'));

require('./app/routes.js')(app);

app.listen(port);
console.log("Server running on port: " + port);
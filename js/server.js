var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var minify = require('express-minify');

minify({cache: __dirname + '/cache'})
app.use(express.static(__dirname + '/page'));

server.listen(3000, console.log("Server running on port 3000."));




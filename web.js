var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index_file = fs.readFileSync('index.html');
var index_content = index_file.toString();
console.log(index_content);
app.get('/', function(request, response) {
  response.send(index_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.use(express.static(__dirname + "/../src"));
app.use(app.router);
app.get('/', function (req, res) {
  res.send("hello")	
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
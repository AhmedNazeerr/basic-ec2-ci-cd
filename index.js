var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write("Hello its Ahmed Nazeer, testing ci/cd lines"); 
  res.end(); 
}).listen(3000); 

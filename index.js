var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write("Hello its Ahmed Nazeer, testing ci/cd pipe line in class"); 
  res.end(); 
}).listen(3000); 

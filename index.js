var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.json({msg:"hi"}); 
  res.end(); 
}).listen(3000); 

const http = require('http');

const handleRequest = function(req, res) {
  console.log(`Received request for URL: ${req.url}`);
  console.log(`[Added log] Received request for URL: ${req.url}`);
  res.writeHead(200);
  res.end('Hello World Again');
};

const www = http.createServer(handleRequest);
www.listen(8080);

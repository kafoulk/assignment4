const http = require('http');

// ...existing code above


// requestListener handler function
function app(req, res) {
    // Sending over ok status and telling the client that we're sending back html
    res.writeHead(200, {"Content-Type": "text/html"});
  
    // Sending over more data, our html
    res.write("<h2>Web Server Page</h2>");
  
    // End our server's data stream
    res.end();
  }
  
  // Create an instance of a server using our handler function
  const server = http.createServer(app);

require('dotenv').config();

// Create a variable for our port, telling it to use 3000 if the PORT environment variable is not provided
const port = process.env.PORT || 3000;

// Tell our server to listen to that port
server.listen(port);

console.log(`http:localhost:${port}`);
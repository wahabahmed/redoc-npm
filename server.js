const httpServer = require('http-server');
const path = require('path');

// Define the directory to serve
const publicDir = path.join(__dirname, 'public');

// Create a server to serve the static files
const server = httpServer.createServer({ root: publicDir });

// Start the server on port 8080
server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});

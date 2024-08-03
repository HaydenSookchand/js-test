const https = require("https");
const net = require("net");
const fs = require("fs");
const path = require("path");

// Load SSL certificate and key for HTTPS
const options = {
  key: fs.readFileSync(path.resolve(__dirname, "certs", "private.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "certs", "certificate.crt")),
};

const hostname = "0.0.0.0";

// HTTPS server on port 443
https
  .createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Again from HTTPS server\n");
  })
  .listen(443, hostname, () => {
    console.log(`HTTPS server running at https://${hostname}:443/`);
  });

// Custom TCP server on port 5001
const tcpServer = net.createServer((socket) => {
  socket.write("Hello TCP Client!\n");
  socket.end();
});

tcpServer.listen(5001, hostname, () => {
  console.log("TCP server running on port 5001");
});

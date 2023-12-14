const fs = require("fs");
const https = require("https");
const express = require("express");

const options = {
  key: fs.readFileSync("./private_file/private-key.pem"),
  cert: fs.readFileSync("./private_file/certificate.pem"),
};

const app = express();

// Define a route with the GET method
app.get("/", (req, res) => {
  res.send("Welcome to the HTTPS Server App...!!");
});

const server = https.createServer(options, app);

server.listen(443, () => {
  console.log("Server running on https://localhost/");
});

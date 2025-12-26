//
// Required modules
//
"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
require('dotenv').config({ path: '.env' });

//
// Map the routes
//
const mexicanNNPRoute = require('./routes/mexican-nnp');

//
// Encoding bodies support
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/mexican-nnp', mexicanNNPRoute);

//
// Set the consts
//
const port = process.env.PORT || 3000;
const MEXICAN_PNM_URL = process.env.MEXICAN_PNM_URL;
if (!MEXICAN_PNM_URL) {
    console.error("Missing required environment variables.");
    process.exit(1);
}

//
// Public folder
//
app.use(express.static('public'));


//
// Create a WebSocket server
//
const server = http.createServer(app);
wsServer.init(server); 

//
// Start the webservice 
//
server.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});


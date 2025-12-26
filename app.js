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
const MEXICAN_PNN_FILENAME = process.env.MEXICAN_PNN_FILENAME;
if (!MEXICAN_PNN_FILENAME) {
    console.error("Missing required environment variables.");
    process.exit(1);
}

//
// Start the webservice 
//
const server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});

//
// Public folder
//
app.use(express.static('public'));

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
const port = 8080;


// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );


// Routes
const ListingRouter = require('./routes/listings');

// Database connection
mongoose.connect('mongodb://localhost:27017/upliftingdb');

server.get('/', ( request, response ) => {
    response.send(`Welcome to Uplifting API`);
});


// endpoints
server.use('/api/v1/listings', ListingRouter );

server.listen(port, () => {
        console.log(`Server running on port ${ port }`);
    }
);



const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
require('dotenv').config();
const port = 8080;

mongoose.set('strictQuery',true);
// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );


// Routes
const ListingRouter = require('./routes/listings');

// Database connection
//mongoose.connect('mongodb://localhost:27017/upliftingdb');
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, useUnifiedTopology: true,
})

server.get('/', ( request, response ) => {
    response.send(`Welcome to Uplifting API`);
});


// endpoints
server.use('/api/v1/listings', ListingRouter );

// server.listen(port, () => {
//         console.log(`Server running on port ${ port }`);
//     }
// );

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`);
})



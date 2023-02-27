const mongoose = require('mongoose');


const ListingSchema = new mongoose.Schema({
    imgUrls: String,
    status: String,
    squareFeet: Number,
    country: String,
    city: String,
    zipCode: Number,
    description: String,
    price: Number
});


module.exports = mongoose.model('Listing', ListingSchema);

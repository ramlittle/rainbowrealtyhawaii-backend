const router=require('express').Router();
const Listing = require('../models/Listings.js');


//RETURN ALL LISTING
router.get('/', async (request, response)=>{
	 try{


    const results = await Listing.find({})
    .exec();
    response.send(results);
	}catch(error){
        response.status(500).send({status:'server error'})
    }


});


//ADD NEW LISTING
router.post('/newListing', ( request, response ) => {
	try{
    let newListing = new Listing( request.body );
    newListing.save().then( result => {
        response.send({ status: "New Listing posted" });
    });
}catch(error){
        response.status(500).send({status:'server error'})
    }


});




module.exports=router;

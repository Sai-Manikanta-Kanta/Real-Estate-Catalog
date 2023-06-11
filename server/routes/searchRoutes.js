// The code defines an Express router by calling require("express").Router().
const router = require("express").Router();
// It imports the Property model from the propertySchema module.
const Property = require("../models/propertySchema");

// This route is used to get the details of a property based on its ID and the user ID.
router.get("/:id",async(req,res)=>{
    try{
        // It expects the property ID and user ID to be available as req.params.id and req.params.userid, respectively.
        // It converts the property ID to uppercase using toUpperCase() method to ensure consistency.
        const ppd_id = req.params.id.toUpperCase();
        // It searches for a property in the database using Property.findOne({ ppdId: ppd_id }), where ppd_id is the uppercase property ID.
        const searchProperty = await Property.findOne({ ppdId: ppd_id });
        
        if(searchProperty == null ){
            // If the search does not yield any result or the found property does not belong to the specified user, it sends a JSON response with a 404 status code and an error message.
            res.status(404).json({
                status:"failed",
                message : "Id not found",
            });
        }else{
            // If a matching property is found and it belongs to the specified user, it sends a JSON response with a 200 status code and the details of the property.
            res.status(200).json({
                status: "success",
                details: searchProperty,
            });
        }
    }
    catch{
        res.status(400).json({
            status: "Failed",
            message : "Id not Found",
            error: error
        })
    }
});

module.exports = router;
const router = require("express").Router();
const Property = require("../models/propertySchema");

router.get("/:id/:userid",async(req,res)=>{
    try{
        // console.log(req.params);
        const ppd_id = req.params.id.toUpperCase();
        const searchProperty = await Property.findOne({ ppdId: ppd_id });
        // console.log(ppd_id , searchProperty)
        if(searchProperty == null || searchProperty.userid != req.params.userid){
            res.status(404).json({
                status:"failed",
                message : "Id not found",
            });
        }else{
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
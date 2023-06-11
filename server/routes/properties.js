// The code defines an Express router by calling require("express").Router().
const router = require("express").Router();
// It imports the Property model from the propertySchema module and the cloudinary middleware.
const Property = require('../models/propertySchema');
const cloudinary = require('../middleware/cloudinary')


// This route is used to add a new property.
router.post('/', async (req, res) => {
  
  try {
//     It expects the request body to contain an imageUrl field.
// It uses the cloudinary middleware to upload the image to Cloudinary and retrieve the secure URL.
    
    const uploadImg = await cloudinary.v2.uploader.upload(
      
      req.body.imageUrl,
      { upload_preset: "Manikanta" },
      async function (error, result) {
        if (error) {
          console.log("Cannot upload");
          res.sendStatus(500);
        } else {
          console.log("success");
          
          const imageUrl = result.secure_url;
     
          // It retrieves the last property from the database using Property.find().sort({ _id: -1 }).limit(1).
          const lastProp = await Property.find().sort({ _id: -1 }).limit(1);
          //console.log(value);
          // It generates a new ppdId based on the last property's ppdId.
          let ppd_id = "PPD";
         
          if (lastProp.length != 0) {
            ppd_id = parseInt(lastProp[0].ppdId.split("D")[1]) + 1;
         
          } else {
            ppd_id = 1100;
            
          }
          // It generates random values for views and dayLeft.
          const views = parseInt(Math.random() * 100);
          const dayLeft = parseInt(Math.random() * 30);

          const { length, breadth, mobile } = req.body;
          const area = parseInt(req.body.length) * parseInt(req.body.breadth);
          // It creates a new property record using the Property.create() method with the extracted data from the request body and other generated values.
          const property = await Property.create({
            ppdId: "PPD" + ppd_id,
            imageUrl: imageUrl,
            views: views,
            status: "Unsold",
            daysLeft: dayLeft,
            property: req.body.property,
            length,
            breadth,
            area: area,
            mobile: req.body.mobile,
            negotiable: req.body.negotiable,
            price: req.body.price,
            ownership: req.body.ownership,
            propertyAge: req.body.propertyAge,
            propApproved: req.body.propApproved,
            propDescription: req.body.propDescription,
            bankLoan: req.body.bankLoan,
            areaUnit: req.body.areaUnit,
            bhk: req.body.bhk,
            floorNum: req.body.floorNum,
            attached: req.body.attached,
            westToilet: req.body.westToilet,
            furnished: req.body.furnished,
            parking: req.body.parking,
            lift: req.body.lift,
            electricity: req.body.electricity,
            facing: req.body.facing,
            name: req.body.name,
            postedBy: req.body.postedBy,
            saleType: req.body.saleType,
            package: req.body.package,
            ppdPackage: req.body.ppdPackage,
            email: req.body.email,
            city: req.body.city,
            addArea: req.body.addArea,
            pincode: req.body.pincode,
            address: req.body.address,
            landmark: req.body.landmark,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            userid: req.user.email,

          });
          // It sends a JSON response with the status and the newly created property.

          res.status(200).json({
            status: "Success",
            property,
          });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "failed",
      message: err.message
    })

  }

});


// Get all properties for a particular user
router.get("/", async (req, res) => {
  try {
    // It expects the user's email to be available in req.user.email.
    // It retrieves properties from the database using Property.find({ userid: req.user.email }).sort({ _id: -1 }).limit(10).
    const allProperty = await Property.find({ userid: req.user.email }).sort({ _id: -1 }).limit(10);
    // It sends a JSON response with the status and the retrieved properties.
    res.status(200).json({
      status: "Success",
      property: allProperty,
    });
  }
  catch(e){
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });

  }
})
// Update an existing property
router.put("/update/:id", async (req, res) => {
  try {
    // It expects the property ID to be available as req.params.id.
    // It updates the property record identified by the ID with the data provided in the request body using Property.findByIdAndUpdate().
    const updatedProperty = await Property.findByIdAndUpdate(
      { _id: req.params.id },
      {
        property: req.body.property,
        length: req.body.length,
        breadth: req.body.breadth,
        area: parseInt(req.body.length) * parseInt(req.body.breadth),
        mobile: req.body.mobile,
        negotiable: req.body.negotiable,
        price: req.body.price,
        ownership: req.body.ownership,
        propertyAge: req.body.propertyAge,
        propApproved: req.body.propApproved,
        propDescription: req.body.propDescription,
        bankLoan: req.body.bankLoan,
        areaUnit: req.body.areaUnit,
        bhk: req.body.bhk,
        floorNum: req.body.floorNum,
        attached: req.body.attached,
        westToilet: req.body.westToilet,
        furnished: req.body.furnished,
        parking: req.body.parking,
        lift: req.body.lift,
        electricity: req.body.electricity,
        facing: req.body.facing,
        name: req.body.name,
        postedBy: req.body.postedBy,
        saleType: req.body.saleType,
        package: req.body.package,
        ppdPackage: req.body.ppdPackage,
        email: req.body.email,
        city: req.body.city,
        addArea: req.body.addArea,
        pincode: req.body.pincode,
        address: req.body.address,
        landmark: req.body.landmark,
        latitude: req.body.latitude,
        longitude: req.body.longitude,

      },

      {
        new: true,
      }
    );
    // It sends a response with the updated property.
    res.send(updatedProperty);
  } catch (error) {
    res.send(error);
  }
});

// This route is used to update the status of a property to "Sold".
router.patch("/sold/:id", async (req, res) => {
  try {
    // It expects the property ID to be available as req.params.id.
    console.log(req.params.id);
    // It updates the property record identified by the ID with the status "Sold" and sets daysLeft to 0 using Property.findByIdAndUpdate()
    const updateId = await Property.findByIdAndUpdate(
      { _id: req.params.id },
      { status: "Sold", daysLeft: 0 },
      { new: true }
    );
    // It sends a JSON response with the status and details of the updated property.
    res.status(200).json({
      status: "Updated",
      details: updateId,
    });
  } catch (error) {
    res.status(401).json({
      status: "Failed",
      message: "Id not found",
    });
  }
});

// This route is used to delete a property by ID.
router.delete('/:id', async (req, res) => {
  try {
    // It expects the property ID to be available as req.params.id.
    // It deletes the property record identified by the ID using Property.findByIdAndDelete().
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }
    // It sends a JSON response indicating the success of the deletion or an error message.

    res.status(200).json({
      message: 'Property deleted successfully',
      data: deletedProperty,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});





module.exports = router;


// The mongoose library is imported
const mongoose = require('mongoose');
// The PropertySchema is defined using mongoose.Schema(). It describes the structure and properties of a property document in the MongoDB collection.
const PropertySchema = mongoose.Schema({
    ppdId: {
        type: String,

    },
    imageUrl: {
        type: String,
    },
    property: {
        type: String,

    },
    views: {
        type: Number,

    },
    status: {
        type: String,
        default: "Unsold",

    },
    daysLeft: {
        type: Number,

    },
    length: {
        type: Number,
    },
    breadth: {
        type: Number,
    },
    area:{
        type : Number
    },
    mobile: {
        type: Number,

    },
    userid: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    email: { type: String ,required:true},
    
    negotiable: { type: String },
    price: { type: Number },
    ownership: { type: String },
    propertyAge: { type: String },
    propApproved: { type: String },
    propDescription: { type: String },
    bankLoan: { type: String },



    areaUnit: { type: String },
    bhk: { type: Number },
    floorNum: { type: Number },
    attached: { type: String },
    westToilet: { type: String },
    furnished: { type: String },
    parking: { type: String },
    lift: { type: String },
    electricity: { type: String },
    facing: { type: String },
    name: { type: String },

    postedBy: { type: String },
    package: { type: String },
    saleType: { type: String },
    ppdPackage: { type: String },
    
    city: { type: String },
    addArea:{ type: String },
    pincode: { type: Number },
    address: { type: String },
    landmark: { type: String },
    latitude: { type: String },
    longitude: { type: String },


})
// The Property model is created using mongoose.model() by passing the name "property" and the PropertySchema. This creates a MongoDB collection named "properties" (pluralized version of the model name) with the specified schema.
const Property = mongoose.model("property", PropertySchema);
// the Property model is exported using module.exports to make it accessible in other parts of the application.
module.exports = Property;
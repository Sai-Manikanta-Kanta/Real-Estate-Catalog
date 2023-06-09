const mongoose = require('mongoose');
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
const Property = mongoose.model("property", PropertySchema);
module.exports = Property;
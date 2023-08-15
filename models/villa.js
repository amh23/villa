const mongoose = require('mongoose');

const villaSchema = new mongoose.Schema({
    villaName:{
        required: true,
        type: String
    },
    images:[{
        type: String
    }],
    thumbnail: {
        type: String
    },
    address: {
        city: String,
        state: String,
        country: String
    },
    capacity:{
        required: true,
        type: Number
    },
    price: { 
        type: Number
    },
    facilities: {
        bedroom: Number,
        bathroom: Number,
        pool: Boolean,
        kitchen: Boolean
    }
},
{
    timestamps: true 
});

module.exports = mongoose.model("Villa", villaSchema);
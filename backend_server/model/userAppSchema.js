const mongoose = require('mongoose');

const userAppSchema = mongoose.Schema({
    postName: {
        type: String,
    },
    postGender: {
        type: String,
    },
    postEmail: {
        type: String,
    },
    postMobile: {
        type: String,
    },
    postCategory: {
        type: String,
    },
    postProPic: {
        type: String,
        // required: true,
    }
},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('UserAppData', userAppSchema);
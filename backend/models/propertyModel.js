const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    
    image: {
        url: String,
        public_id: String,
    },
    status:{
        type:String,
        enum:['available','sold'],
        default:'available'
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserDetail'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true });

const PropertyDetail = mongoose.model('PropertyDetail', propertySchema);

module.exports = PropertyDetail;

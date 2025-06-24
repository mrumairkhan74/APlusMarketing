const mongoose = require('mongoose');
const db = require('../connection/db')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PropertyDetail',
    }],
}, { timestamps: true });

const UserDetail = mongoose.model('UserDetail', userSchema);

module.exports = UserDetail;

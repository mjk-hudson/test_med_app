<<<<<<< HEAD
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('user', userSchema);
=======
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('user', userSchema);
>>>>>>> 40019460b0e2bede5fc85c4b6623354d35848fdc

'use strict'

const mongoose = require('mongoose');
const Shema = mongoose.Shema;

const shema = new Shema({
    title:{
        type: String,
        required: true,
        trim: true
    }, 
    slug: {
        type: String, 
        required: true, 
        trim: true, 
        index: true,
        unique: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    }, 
    active: {
        type: Boolean, 
        required: true, 
        defaut: true
    }, 
    tags: [{
        type: String, 
        required: true
    }]
});

module.exports = mongoose.model('Product', shema);
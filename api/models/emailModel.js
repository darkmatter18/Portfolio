const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailModel = new Schema({
    name: { type: String, max: 50 },
    email: { type: String, max: 50 },
    phone: { type: String, max: 15 },
    msg: { type: String, max: 100 },
    time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('emailModel', emailModel);
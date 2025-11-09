const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    details: { type: String },
    owner: { type:String, required: true },
    status: { type: String, default: 'New' },
history: [{
        status: { type: String, required: true },
        timestamp: { type: Date, required: true }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);

const mongoose = require('mongoose');
const leadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['New', 'Contacted', 'Qualified', 'Closed'], default: 'New' },
    history: [
        {
            updatedAt: { type: Date, default: Date.now },
            updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            action: { type: String }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);

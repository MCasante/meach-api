const mongoose = require('mongoose')

const VagaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    wage: {
        type: String,
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Vaga', VagaSchema)
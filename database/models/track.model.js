const mongoose = require('mongoose');
const { Schema } = mongoose;

// Track Schema 
const TrackSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Track = mongoose.model("Track", TrackSchema);

module.exports = Track;
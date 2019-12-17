const mongoose = require('mongoose');

const durationSchema = new mongoose.Schema({
  durationname: {             
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    unique: true },
}, {
  timestamps: true,
});

const Duration = mongoose.model('Duration', durationSchema);

module.exports = Duration;
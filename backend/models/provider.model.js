const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  providername: { type: String,trim: true, required: true },
  pdescription: { type: String },
  region: [{ type: String}],
  providertype: { type: String},
  photo: { data: Buffer,
           contentType: String},
}, {
  timestamps: true,
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
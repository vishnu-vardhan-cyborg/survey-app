const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Survey', SurveySchema);

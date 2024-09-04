const mongoose = require('mongoose');


const pngImagesmodelSchema = new mongoose.Schema({
  original_image_name: { type: String, required: true }, 
  processed_image_name: { type: String, required: true },
  processed_at: { type: Date, default: Date.now }, 
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const PngImagesmodel = mongoose.model('PngImage', pngImagesmodelSchema);

module.exports = PngImagesmodel;
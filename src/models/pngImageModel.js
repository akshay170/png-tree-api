const mongoose = require('mongoose');


const pngImagesmodelSchema = new mongoose.Schema({
  png_image_name: { type: String, required: true },
  png_image_url: { type: String, required: true },
  processed_at: { type: Date, default: Date.now },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const PngImages = mongoose.model('PngImage', pngImagesmodelSchema);

module.exports = PngImages;
const mongoose = require('mongoose');

const backgroundImagesModelSchema = new mongoose.Schema({
  background_image_name: { type: String, required: true }, 
  background_image_url: { type: String, required: true }, 
  extracted_at: { type: Date, default: Date.now }, 
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const BackgroundImages = mongoose.model('BackgroundImage', backgroundImagesModelSchema);

module.exports = BackgroundImages;

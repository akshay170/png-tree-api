const mongoose = require('mongoose');

const backgroundImagesModelSchema = new mongoose.Schema({
  source_image_name: { type: String, required: true }, 
  background_image_name: { type: String, required: true }, 
  extracted_at: { type: Date, default: Date.now }, 
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const BackgroundImagesModel = mongoose.model('BackgroundImage', backgroundImagesModelSchema);

module.exports = BackgroundImagesModel;

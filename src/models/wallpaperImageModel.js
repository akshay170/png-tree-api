const mongoose = require('mongoose');

const wallpaperImagesModelSchema = new mongoose.Schema({
  wallpaper_name: { type: String, required: true }, 
  created_at: { type: Date, default: Date.now }, 
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const WallpaperImagesModel = mongoose.model('WallpaperImage', wallpaperImagesModelSchema);

module.exports = WallpaperImagesModel;

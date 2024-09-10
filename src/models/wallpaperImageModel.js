const mongoose = require('mongoose');

const wallpaperImagesModelSchema = new mongoose.Schema({
  wallpaper_name: { type: String, required: true }, 
  wallpaper_url: { type: String, required: true }, 
  created_at: { type: Date, default: Date.now }, 
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const WallpaperImages = mongoose.model('WallpaperImage', wallpaperImagesModelSchema);

module.exports = WallpaperImages;

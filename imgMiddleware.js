const multer = require('multer'),
      cloudinary = require('cloudinary'),
      cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "nodeapp",
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 200, height: 200, crop: 'limit' }]
});

const parser = multer({ storage });
module.exports = { parser, storage };

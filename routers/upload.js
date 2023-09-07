const Multer = require("multer");
const express = require("express");
const cloudinary = require("cloudinary").v2;
const uploadRouter = express.Router();

cloudinary.config({
  cloud_name: "dpgjnngzt",
  api_key: "319856232651771",
  api_secret: "5xGhpeWELq0pVIlt1jQRTCk1DKA",
});
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});
uploadRouter.post("/", upload.single("my_file"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.status(200).json({
      url: cldRes.url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  uploadRouter,
};

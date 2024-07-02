const Flora = require("../models/Flora");
const path = require("path");

// Handle file upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  },
});
const upload = multer({ storage: storage });

// Create a new post
exports.createFlora = [
  // upload.single("image"),
  async (req, res) => {
    try {
      const { prompt, tags, mark } = req.body;
      const image = "img.jpg";

      const newFlora = new Flora({
        prompt,
        tags,
        image,
        mark,
      });
      await newFlora.save();

      res.status(201).json(newFlora);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
];

// Get all posts
exports.getFlora = async (req, res) => {
  try {
    const getFlora = await Flora.find();
    res.status(200).json(getFlora);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

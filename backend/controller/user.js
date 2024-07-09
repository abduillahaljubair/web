const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();


// Create user (signup)
router.post("/signup", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password, phoneNumber, addresses } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      throw new ErrorHandler("User already exists", 403);
    }

    const filename = req.file.filename;
    const fileUrl = path.join("uploads", filename); // Adjust the path as per your requirements

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      addresses,
      avatar: {
        public_id: req.file.filename,
        url: fileUrl,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(error.statusCode?? 500).json({
      success: false,
      message: error.message ?? 'Something went wrong'
    });
  }
});

// Login user
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new ErrorHandler("Invalid email or password", 401)
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new ErrorHandler("Invalid email or password", 401)
    }

    console.log('secret:',process.env.JWT_SECRET)
    console.log('JWT_EXPIRE:',process.env.JWT_EXPIRE)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
   
    res.status(error.statusCode?? 500).json({
      success: false,
      message: error.message ?? 'Something went wrong'
    });
  }
});

module.exports = router;

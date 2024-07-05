const express = require("express");
const path = require("path");
const router = express.Router();
const {upload} = require("../multer");


/*const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated, isAdmin } = require("../middleware/auth");*/

// create user
router.post("/create-user", async (req, res, next) => {
  try {
    const { name, email, password, avatar } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    /*const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "avatars",
    });*/
    const filename =req.file.filename;
    const fileUrl = pat.join(filename);

   
    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };

    console.log(user);
  })

  module.exports =routers;
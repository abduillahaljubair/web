const jwt = require("jsonwebtoken");
// create token and saving that in cookies
const sendShopToken = (user, statusCode, res) => {
 // const token = user.getJwtToken();
 const token = jwt.sign(JSON.parse( JSON.stringify(user)),  process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRE,
});
  console.log('user',user)
  console.log('token',token)

  

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  res.status(statusCode).cookie("seller_token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendShopToken;

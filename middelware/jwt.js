const User = require('../model/user');
const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  try {
    const token = req.header("authorization"); 
    const user = jwt.verify(token, "yashShukla");
    User.findById(user.userId).then((result) => {
      req.user = result;
      next();
    });
  } catch (err) {
    console.log(err);
  }
};
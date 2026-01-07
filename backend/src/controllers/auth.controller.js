const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
 async function registerUser(req, res) {
  const { fullName, email, password } = req.body;
  const isUserExist = await userModel.findOne({ email });
  if (isUserExist) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign({ id: user._id }, "4bdec23bab792b9dabd0e8b13391feae");
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}

module.exports = { registerUser };

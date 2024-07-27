const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, config.jwtSecret, { expiresIn: "3d" }, (err, token) => {
      if (err) return reject(err);
      resolve(token);
    });
  });
};

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create new user
    user = new User({ name, email, password, role });
    console.log(user);

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Generate JWT token
    const token = await generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate JWT token
    const token = await generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

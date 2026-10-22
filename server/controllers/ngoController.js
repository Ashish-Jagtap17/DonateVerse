const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const NGO = require('../models/ngoSchema');

const signupNGO = async (req, res) => {
  const {
    ngoName,
    registrationNumber,
    email,
    password,
    contactPersonName,
    phoneNumber,
    address,
    cityStatePincode,
    typeOfWork
  } = req.body;

  try {
    const existingNGO = await NGO.findOne({ email });
    if (existingNGO) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newNGO = new NGO({
      ngoName,
      registrationNumber,
      email,
      password: hashedPassword,
      contactPersonName,
      phoneNumber,
      address,
      cityStatePincode,
      typeOfWork
    });

    await newNGO.save();
    res.status(201).json({ message: 'NGO registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginNGO = async (req, res) => {
  const { email, password } = req.body;

  try {
    const ngo = await NGO.findOne({ email });
    if (!ngo) return res.status(400).json({ message: "NGO not found" });

    const isMatch = await bcrypt.compare(password, ngo.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT with NGO role
    const token = jwt.sign(
      { id: ngo._id, role: "ngo" },
      'secretKey',
      { expiresIn: "1d" }
    );

    // ✅ Use ngoToken instead of token
    res.json({
      message: "Login successful",
      ngoToken: token,  
      ngo: {
        _id: ngo._id,
        ngoName: ngo.ngoName,
        email: ngo.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { signupNGO, loginNGO };

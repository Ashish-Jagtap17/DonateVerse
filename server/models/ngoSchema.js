const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  ngoName: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactPersonName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cityStatePincode: {
    type: String,
    required: true,
  },
  typeOfWork: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('NGO', ngoSchema);

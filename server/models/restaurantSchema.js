const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  cityStatePincode: { type: String, required: true },
  foodType: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);

const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  foodType: { type: String, required: true },
  quantity: { type: String, required: true },
  prepDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  instructions: { type: String },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",   // connects donation to restaurant
    required: true
  },
  restaurantName: { type: String, required: true },   // ✅ stored once at creation
  contactNumber: { type: String, required: true },   // ✅ stored once at creation

    // ✅ NGO fields
  status: { type: String, enum: ["available", "accepted","collected"], default: "available" },
  ngoId: { type: mongoose.Schema.Types.ObjectId, ref: "NGO", default: null }
}, { timestamps: true });

module.exports = mongoose.model("Donation", donationSchema);

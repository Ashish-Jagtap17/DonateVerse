const Donation = require("../models/donationSchema");
const Restaurant = require("../models/restaurantSchema"); // ✅ to fetch restaurant info

// Create a new donation
const createDonation = async (req, res) => {
  try {
    const { foodType, quantity, prepDate, expiryDate, instructions } = req.body;

    // Restaurant ID comes from token (set in verifyToken middleware)
    const restaurant = await Restaurant.findById(req.user.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const donation = new Donation({
      foodType,
      quantity,
      prepDate,
      expiryDate,
      instructions,
      restaurantId: req.user.id,
      restaurantName: restaurant.restaurantName,  // ✅ save restaurant name
      contactNumber: restaurant.phoneNumber,       // ✅ save restaurant number
      status:"available"
    });

    await donation.save();
    res.status(201).json({ message: "Donation created successfully", donation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ status: "available" }); // filter
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get donations by logged-in restaurant
const getMyDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ restaurantId: req.user.id });
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// NGO accepts a donation
const acceptDonation = async (req, res) => {
  try {
    const { id } = req.params;    // donation id
    const  ngoId  = req.user.id;   // logged-in NGO ID

    const donation = await Donation.findById(id);
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    if (donation.status === "accepted") {
      return res.status(400).json({ message: "Donation already accepted" });
    }

    donation.status = "accepted";
    donation.ngoId = ngoId;

    await donation.save();
    res.json({ message: "Donation accepted successfully", donation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all donations accepted by the logged-in NGO
const getMyAcceptedDonations = async (req, res) => {
  try {
    const ngoId = req.user.id; // comes from verifyToken
    const donations = await Donation.find({ ngoId, status: { $in: ["accepted", "collected"] } });

    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mark donation as collected
const collectDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findByIdAndUpdate(
      id,
      { status: "collected" },
      { new: true }
    );

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.json({ message: "Donation marked as collected", donation });
  } catch (error) {
    res.status(500).json({ message: "Error marking donation as collected", error });
  }
};




module.exports = { createDonation, getAllDonations, getMyDonations,acceptDonation ,getMyAcceptedDonations , collectDonation};

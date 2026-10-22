const express = require("express");
const { createDonation, getAllDonations, getMyDonations ,getMyAcceptedDonations,collectDonation} = require("../controllers/donationController");
const { acceptDonation } = require("../controllers/donationController"); 
const {verifyToken,allowRole} = require("../middleware/verifyToken");

const router = express.Router();

// Restaurant creates donation (must be logged in)
router.post("/create", verifyToken, allowRole("restaurant"),createDonation);

// NGO gets all donations
router.get("/all", verifyToken,getAllDonations);

router.put("/:id/accept", verifyToken,allowRole("ngo"),acceptDonation);

// Restaurant gets only their donations
router.get("/my", verifyToken, getMyDonations);

router.get("/my-accepted", verifyToken, allowRole("ngo"), getMyAcceptedDonations);

router.patch("/:id/collect", verifyToken, allowRole("ngo"), collectDonation);

module.exports = router;

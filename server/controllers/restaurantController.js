    const Restaurant = require('../models/restaurantSchema');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcryptjs');





    // Restaurant Login
const loginRestaurant = async (req, res) => {
  const { email, password } = req.body;

  try {
    const restaurant = await Restaurant.findOne({ email });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const isMatch = await bcrypt.compare(password, restaurant.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Use environment secret or fallback
    const token = jwt.sign(
      { id: restaurant._id, role: 'restaurant' },
      process.env.JWT_SECRET || 'secretKey',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      restaurant: {
        id: restaurant._id,
        name: restaurant.restaurantName,
        email: restaurant.email,
        contactPerson: restaurant.contactPerson,
        phoneNumber: restaurant.phoneNumber,
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

    // Restaurant Signup
    const signupRestaurant = async (req, res) => {
      const {
        restaurantName,
        ownerName,
        email,
        password,
        registrationNumber,
        contactPerson,
        phoneNumber,
        address,
        cityStatePincode,
        foodType,
        termsAccepted
      } = req.body;

      try {
        const existingRestaurant = await Restaurant.findOne({ email });
        if (existingRestaurant) {
          return res.status(400).json({ message: 'Email already registered' });
        }

        // ✅ Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newRestaurant = new Restaurant({
          restaurantName,
          ownerName,
          email,
          password: hashedPassword,  // save hashed password
          registrationNumber,
          contactPerson,
          phoneNumber,
          address,
          cityStatePincode,
          foodType,
          termsAccepted
        });

        await newRestaurant.save();
        res.status(201).json({ message: 'Restaurant registered successfully' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };



    module.exports = { signupRestaurant, loginRestaurant };

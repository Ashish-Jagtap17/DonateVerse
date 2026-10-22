import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NgoSignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ngoName: "",
    registration: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    phone: "",
    address: "",
    location: "",
    ngoType: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/ngo/signup", {
        ngoName: formData.ngoName,
        registrationNumber: formData.registration,
        email: formData.email,
        password: formData.password,
        contactPersonName: formData.contact,
        phoneNumber: formData.phone,
        address: formData.address,
        cityStatePincode: formData.location,
        typeOfWork: formData.ngoType
      });

      alert(res.data.message);
      navigate("/ngologin");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const scrollToSection = (id) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#0c2a34] text-white">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img
            src="/logo.jpg"
            alt="logo"
            className="h-10 w-10"
          />
          Donate Verse
        </div>
        <ul className="flex items-center space-x-6 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('how-it-works')}>How it works</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          <li><Link to="/ngologin" className="text-cyan-300">NGO Login</Link></li>
          <li><button className="bg-orange-500 px-4 py-2 rounded text-white">Start Donating</button></li>
        </ul>
      </nav>

      <div className="flex justify-center py-10 px-4">
        <div className="bg-white shadow-md p-6 rounded-lg max-w-md w-full">
          <div className="flex border-b mb-4">
            <Link to="/login" className="w-1/2 text-center py-2 font-semibold text-gray-500">Login</Link>
            <button className="w-1/2 py-2 font-semibold border-b-4 border-black">Sign Up</button>
          </div>

          <form onSubmit={handleSubmit}>
            {[
              ['ngoName', 'Name of NGO'],
              ['registration', 'Registration number'],
              ['email', 'Email Address', 'email'],
              ['password', 'Password', 'password'],
              ['confirmPassword', 'Confirm Password', 'password'],
              ['contact', 'Contact Person Name'],
              ['phone', 'Phone Number'],
              ['address', 'Address'],
              ['location', 'City/State/Pincode'],
              ['ngoType', 'Type of NGO Work'],
            ].map(([name, label, type = 'text']) => (
              <div className="mb-3" key={name}>
                <label className="block text-sm mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Enter ${label}`}
                />
              </div>
            ))}

            <div className="mb-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" required /> Yes, I agree to the Terms of Service
              </label>
            </div>

            <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
              Sign Up
            </button>
          </form>

          <div className="text-center text-gray-400 text-sm my-4">── OR CONTINUE WITH ──</div>

          <div className="flex gap-2">
            <button onClick={() => window.location.href = 'https://accounts.google.com/signin'}
              className="w-full border py-2 rounded flex justify-center items-center gap-2">
              <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />Google</button>

            <button onClick={() => window.location.href = 'https://www.facebook.com/login'}
              className="w-full border py-2 rounded flex justify-center items-center gap-2">
              <img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" />Facebook</button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            <p className="mt-2">Quick Links &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms &nbsp; | &nbsp; Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoSignUpPage;


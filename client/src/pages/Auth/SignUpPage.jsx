import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/restaurants/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Sign Up Successful');
        navigate('/login');
      } else {
        alert(data.message || 'Sign Up Failed');
      }
    } catch (error) {
      console.error(error);
      alert('Error signing up');
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
          <button className="bg-orange-500 px-4 py-2 rounded text-white">
            Start Donating
          </button>
        </ul>
      </nav>

      {/* Form */}
      <div className="flex justify-center py-10 px-4">
        <div className="bg-white shadow-md p-6 rounded-lg max-w-md w-full">
          <div className="flex border-b mb-4">
            <Link to="/login" className="w-1/2 py-2 font-semibold text-gray-500 text-center">
              Login
            </Link>
            <button className="w-1/2 py-2 font-semibold border-b-4 border-black">
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {[
              ['restaurantName', 'Name of Restaurant'],
              ['ownerName', 'Owner/Manager Name'],
              ['email', 'Email Address'],
              ['password', 'Password', 'password'],
              ['confirmPassword', 'Confirm Password', 'password'],
              ['registrationNumber', 'Registration Number'],
              ['contactPerson', 'Contact Person Name'],
              ['phoneNumber', 'Phone Number'],
              ['address', 'Address'],
              ['cityStatePincode', 'City/State/Pincode'],
              ['foodType', 'Type of Food Usually Donated'],
            ].map(([name, label, type = 'text']) => (
              <div className="mb-3" key={name}>
                <label className="block text-sm mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Enter ${label}`}
                  required
                />
              </div>
            ))}

            <div className="mb-3">
  <label className="flex items-center gap-2 text-sm">
    <input
      type="checkbox"
      name="termsAccepted"
      checked={formData.termsAccepted || false}
      onChange={(e) =>
        setFormData({ ...formData, termsAccepted: e.target.checked })
      }
      required
    />
    Yes, I agree to the Terms of Service
  </label>
</div>


            <div className="flex justify-between text-sm mb-3">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgotpassword" className="text-purple-600">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-gray-400 text-sm my-4">── OR CONTINUE WITH ──</div>
          <div className="flex gap-2">
            <button
              onClick={() => window.location.href = 'https://accounts.google.com/signin'}
              className="w-full border py-2 rounded flex justify-center items-center gap-2"
            >
              <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
              Google
            </button>
            <button
              onClick={() => window.location.href = 'https://www.facebook.com/login'}
              className="w-full border py-2 rounded flex justify-center items-center gap-2"
            >
              <img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
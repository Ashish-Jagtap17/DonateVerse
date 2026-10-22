import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
    navigate('/');
  };

  const scrollToSection = (id) => {
    navigate('/'); // go to home first
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // wait for navigation
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#0c2a34] text-white">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP._BgcDDhPqqSD-Nad699zcgHala?pid=Api&P=0&h=180"
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
        </ul>
      </nav>

      
      {/* Forgot Password Form */}
      <div className="flex justify-center py-20 px-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
            >
              Send Reset Link
            </button>
          </form>

          <div className="text-sm text-center mt-4">
            Remembered your password?{' '}
            <Link to="/login">
            <button
             
              className="text-purple-600"
            >
              Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const NgoLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Reset fields when component mounts
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/ngo/login", {
        email,
        password
      });

      alert(res.data.message);
      
      // Save token to localStorage so we can use it for protected routes
      // Save token to localStorage so we can use it for protected routes
localStorage.setItem("ngoToken", res.data.ngoToken);
localStorage.setItem("ngoDetails", JSON.stringify(res.data.ngo));


      // Clear fields after login
      setEmail("");
      setPassword("");

      // Go to dashboard if login is correct
      navigate("/donateversedashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
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
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row items-start px-10 py-10 gap-30 bg-white">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/child.jpg"
            alt="donation"
            className="rounded-lg"
          />
          <h1 className="text-4xl font-bold mt-10">
            Every Meal, A New Hope, A Blessing
          </h1>
          <p className="mt-4 text-lg font-semibold">Join Us in Making a Difference</p>
        </div>

        {/* Right Section - Login */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8 max-w-md">
          <div className="flex border-b mb-4">
            <button className="w-1/2 py-2 font-semibold border-b-4 border-black">Login</button>
            <Link to="/ngosignup"><button className="w-1/2 py-2 font-semibold">Sign Up</button></Link>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off">
            <h2 className="font-bold text-lg mb-3">Welcome Back</h2>
            <div className="mb-3">
              <label className="block text-sm mb-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="new-email"
                className="w-full px-3 py-2 border rounded" 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="w-full px-3 py-2 border rounded" 
                required 
              />
            </div>
            <div className="flex justify-between text-sm mb-3">
              <label><input type="checkbox" /> Remember me</label>
              <Link to="/forgotpassword" className="text-purple-600">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded">
              Login
            </button>
          </form>

          <div className="text-sm mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/ngosignup" className="text-purple-600">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoLoginPage;

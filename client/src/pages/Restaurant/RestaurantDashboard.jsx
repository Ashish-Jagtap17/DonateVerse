import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RestaurantDashboard() {
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prepDate, setPrepDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [instructions, setInstructions] = useState("");
  const [message, setMessage] = useState("");
  const [recentSubmissions, setRecentSubmissions] = useState([]);

  // Fetch donations on load
  useEffect(() => {
    const fetchDonations = async () => {
       
      try {
        const restaurantId = localStorage.getItem("restaurantId");
        const token = localStorage.getItem("restaurantToken");
        if (!restaurantId) return;

        const res = await axios.get(
          `http://localhost:5000/api/donations/restaurant/${restaurantId}`
        );
        setRecentSubmissions(res.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  // Submit donation
  const handleSubmit = async () => {
    const restaurantId = localStorage.getItem("restaurantId");
    const token = localStorage.getItem("restaurantToken"); 

    if (!restaurantId) {
      setMessage("⚠️ Please login again. Restaurant ID missing.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/donations/create", {
        restaurantId,
        foodType,
        quantity,
        prepDate,
        expiryDate,
        instructions,
      },{
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-Type":"application/json"
        }
      });

      setMessage("✅ Donation submitted successfully!");
      setFoodType("");
      setQuantity("");
      setPrepDate("");
      setExpiryDate("");
      setInstructions("");

      setRecentSubmissions((prev) => [res.data, ...prev]);
    } catch (error) {
      console.error("Error submitting donation:", error);
      setMessage("❌ Failed to submit donation. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#002D3D] text-white shadow">
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="logo" className="w-8 h-8" />
          <h1 className="font-bold text-xl">Donate Verse</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">How it Works</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>
        <button
          className="text-teal-300 hover:underline"
          onClick={() => {
            localStorage.removeItem("restaurantId");
            window.location.href = "/login";
          }}
        >
          Log out
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-6 py-3 bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full sm:w-80 border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <main className="p-6 space-y-8 max-w-6xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold">Today's submissions</h3>
            <p className="text-3xl text-blue-600 font-bold mt-2">{recentSubmissions.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-green-500">
            <h3 className="text-lg font-semibold">Collected Today</h3>
            <p className="text-3xl text-green-600 font-bold mt-2">
              {recentSubmissions.filter(d => d.status === "Collected").length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-purple-500">
            <h3 className="text-lg font-semibold">Active NGO's</h3>
            <p className="text-3xl text-purple-600 font-bold mt-2">15</p>
          </div>
        </div>

        {/* Food Submission Form */}
        <div className="bg-white border rounded-lg p-6 shadow space-y-4">
          <h2 className="text-xl font-bold mb-4">Submit Leftover Food</h2>

          {message && (
            <p
              className={`p-2 text-sm rounded ${
                message.includes("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select food type</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Non - Vegetarian</option>
              <option value="Bakery">Bakery</option>
            </select>
            <input
              type="text"
              placeholder="Quantity (e.g. 10 servings)"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              value={prepDate}
              onChange={(e) => setPrepDate(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <textarea
            placeholder="Any allergies, storage instructions, etc."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
          />

          <button
            onClick={handleSubmit}
            className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Notify NGO's
          </button>
        </div>

        {/* Recent Submissions
        <div className="bg-white border rounded-lg p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Submissions</h2>
            <button className="text-sm text-blue-600 hover:underline">View all</button>
          </div>

          <div className="grid grid-cols-5 font-semibold text-sm border-b pb-2">
            <span>Food Type</span>
            <span>Quantity</span>
            <span>Status</span>
            <span>Submitted</span>
            <span>NGO Contact</span>
          </div>

          {recentSubmissions.map((item, idx) => (
            <div key={idx} className="grid grid-cols-5 py-2 text-sm border-b">
              <span>{item.foodType}</span>
              <span>{item.quantity}</span>
              <span>
                <span
                  className={`px-2 py-1 rounded text-white text-xs ${
                    item.status === "Collected"
                      ? "bg-green-500"
                      : item.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-purple-500"
                  }`}
                >
                  {item.status}
                </span>
              </span>
              <span>{new Date(item.prepDate).toLocaleDateString()}</span>
              <span>{item.ngoContact || "—"}</span>
            </div>
          ))}
        </div> */}
      </main>

      {/* Live Chat Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-[#002D3D] text-white px-4 py-2 rounded shadow hover:bg-[#001a24]">
          Live chat with NGO
        </button>
      </div>
    </div>
  );
}

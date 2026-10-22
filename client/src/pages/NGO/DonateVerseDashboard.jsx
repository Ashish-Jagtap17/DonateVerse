    import React, { useState,useEffect} from "react";
    import MapComponent from "../../components/MapComponent";
    import axios from "axios";
    import resto from "../NGO/assests/restaurant.jpg"
    import { useNavigate } from "react-router-dom";




    const TopNavbar = () => (
      <div className="flex justify-between items-center px-6 py-4 bg-[#002D3D] text-white">
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="logo" className="w-8 h-8" />
          <h1 className="font-bold text-xl">Donate Verse</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/how-it-works" className="hover:underline">How it works</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <button className="text-teal-300 hover:underline">Log out</button>
      </div>
    );

    const Sidebar = ({ activeSection,setActiveSection,ngo }) => (
      
      <div className="w-60 bg-[#F9F9F9] h-screen p-6"> 

        <h2 className="text-lg font-semibold mb-4">Welcome,<br /> {ngo? ngo.ngoName : "Loading..."}</h2>
        <ul className="space-y-4 text-gray-700">
          <li
            className={`rounded px-3 py-2 cursor-pointer ${
              activeSection === "notifications" ? "bg-blue-100" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("notifications")}
          >
            🔔 Notifications
          </li>
          {/* <li
            className={`rounded px-3 py-2 cursor-pointer ${
              activeSection === "dashboard" ? "bg-blue-100" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            🏠 Dashboard
          </li> */}
          {/* <li
            className={`rounded px-3 py-2 cursor-pointer ${
              activeSection === "settings" ? "bg-blue-100" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("settings")}
          >
            ⚙ Settings
          </li> */}
          <li
            className={`rounded px-3 py-2 cursor-pointer ${
              activeSection === "availableOrders" ? "bg-blue-100" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveSection("availableOrders")}
          >
            📋 Available Orders
          </li>
        </ul>
      </div>
    );

    const SearchBar = () => (
      <input
        type="text"
        placeholder="Search Restaurants by name....."
        className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm mb-4"
      />
    );

  

    
  const CountdownTimer = ({ expiryTime }) => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
      const updateTimeLeft = () => {
        if (!expiryTime) {
          setTimeLeft("N/A");
          return;
        }
        const diff = new Date(expiryTime) - new Date();
        if (diff <= 0) {
          setTimeLeft("Expired");
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          setTimeLeft(`${hours}h ${minutes}m`);
        }
      };

      updateTimeLeft();
      const timer = setInterval(updateTimeLeft, 60000); // update every 1 min
      return () => clearInterval(timer);
    }, [expiryTime]);

    return <span>{timeLeft}</span>;
  };


    const DonationCard = ({ order, onAccept }) => (
 <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">New Donation Available</h2>
        <p className="text-sm text-gray-600">Fresh prepared meals available for collection</p>
      </div>
      <span className="bg-orange-400 text-white text-sm px-3 py-1 rounded-full">New</span>
    </div>

    <div className="flex items-center mt-4 space-x-4">
      <img src={resto} alt="icon" className="w-12 h-10" />
      <p className="font-medium">{order.restaurantName}</p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Expires in:</strong><CountdownTimer expiryTime={order.expiryDate}/></p>
      <p><strong>Food type:</strong> {order.foodType}</p>
      <p><strong>Contact:</strong> {order.contactNumber}</p>
    </div>

     <div className="mt-4 ml-100 flex flex-wrap gap-3">
  <button className="ml-10 rounded bg-blue-400 px-6 py-4 text-white" onClick={() => onAccept(order._id)}>Accept</button>
  <button className="rounded bg-gray-300 px-6 py-4">Deny</button>
</div>

  </div>

);      


  const calculatePickupTime = (expiryDate) => {
  if (!expiryDate) return "N/A";
  const expiry = new Date(expiryDate);
  // Subtract 1 hour from expiry
  expiry.setHours(expiry.getHours() - 1);
  return expiry.toLocaleString([], { 
    year: "numeric", 
    month: "short", 
    day: "numeric", 
    hour: "2-digit", 
    minute: "2-digit" 
  });
};


    const DonationCardAccepted = ({ order,navigate,currentUser }) => (
      <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
        <div className="flex justify-between items-start">
          <div>
  <h2 className="text-lg font-semibold mb-1">Your Accepted Donation</h2>
  <p className="text-sm text-gray-600">
    Details are as below. You can contact the restaurant
  </p>
</div>

          
          <div className="text-right">
            <span
    className={`text-white text-sm font-semibold px-4 py-1 rounded ${
      order.status === "collected" ? "bg-green-500" : "bg-red-500"
    }`}
  >
    {order.status === "collected" ? "Collected" : "Pending"}
  </span>
            <p className="text-sm font-semibold mt-1">
              Pick up By: <span className="text-black">{calculatePickupTime(order.expiryDate)}</span>
            </p>
          </div>
        </div>

        <div className="flex mt-4 gap-4">
          <div className="flex-1">
            <div className="flex items-center mt-4 space-x-4">
              <img src={resto} alt="icon" className="w-12 h-10" />
              <p className="font-medium">{order.restaurantName}</p>
              <div className="flex items-center space-x-1">
                <p>{order.distance}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-sm mb-2">
              <p><span className="font-semibold">Quantity:</span> {order.quantity}</p>
            
          <p><strong>Expires in:</strong> <CountdownTimer expiryTime={order.expiryDate}/></p>

              <p><span className="font-semibold">Food type:</span> {order.foodType}</p>
              <p><span className="font-semibold">Contact:</span> {order.contactNumber}</p>
            </div>

            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Special Instruction:</span><br />
              {order.instructions || "No special instructions"}
            </p>

            <div className="mx-[40px] mt-4 flex flex-wrap gap-3">
             <button
  className={`w-[300px] rounded px-4 py-2 text-white ${
    order.status === "collected" ? "bg-green-600" : "bg-orange-600"
  }`}
  onClick={async () => {
    if (order.status !== "collected") {
      try {
        const ngoToken = localStorage.getItem("ngoToken");
        await axios.patch(
          `http://localhost:5000/api/donations/${order._id}/collect`,
          {},
          { headers: { Authorization: `Bearer ${ngoToken}` } }
        );
        window.location.reload();
      } catch (err) {
        console.error("Error marking as collected:", err.response?.data || err.message);
        alert("Failed to mark donation as collected.");
      }
    }
  }}
  disabled={order.status === "collected"}
>
  {order.status === "collected" ? "Collected" : "Collect"}
</button>



            </div>
          </div>

          <div>
            <div style={{ height: "200px", width: "500px" }}>
              <MapComponent lat={19.0760} lon={72.8777} />
            </div>
          </div>
        </div>
      </div>
    );



 const DonateVerseDashboard = () => {
  const [ngo,setNgo] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [availableOrders, setAvailableOrders] = useState([]);
  const [activeSection, setActiveSection] = useState("notifications");
  const navigate = useNavigate();

useEffect(() => {
  const fetchDonations = async () => {
    try {
      const ngoToken = localStorage.getItem("ngoToken"); 
      const res = await axios.get("http://localhost:5000/api/donations/all", {
        headers: { Authorization: `Bearer ${ngoToken}` },

      });
      console.log("Fetched donations:", res.data);
      setNotifications(res.data);
      console.log("Fetched donations:", res.data);

    } catch (err) {
      console.error("Error fetching donations:", err.response?.data || err.message);
    }
  };

  fetchDonations();
}, []);



  
  // get logged-in user (from localStorage or auth)
  useEffect(() => {
    const storedNgo = localStorage.getItem("ngoDetails");
    if (storedNgo) {
      setNgo(JSON.parse(storedNgo));
    }
  }, []);

  // Accept handler
  const handleAccept = async (orderId) => {
    try {
      const ngoToken = localStorage.getItem("ngoToken");
      const res = await axios.put(
        `http://localhost:5000/api/donations/${orderId}/accept`,
        {}, // no body needed
        { headers: { Authorization: `Bearer ${ngoToken}` } }
      );

      // move accepted order to "availableOrders"
      const acceptedOrder = res.data.donation;
      setNotifications(prev => prev.filter(o => o._id !== orderId));
      setAvailableOrders(prev => [...prev, acceptedOrder]);
      setActiveSection("availableOrders");

    } catch (err) {
      console.error("Error accepting donation:", err.response?.data || err.message);
      alert("Failed to accept donation.");
    }
  };

  // Fetch accepted donations when "Available Orders" tab is active
  useEffect(() => {
    if (activeSection === "availableOrders") {
      const fetchAccepted = async () => {
        try {
          const ngoToken = localStorage.getItem("ngoToken");
          const res = await axios.get("http://localhost:5000/api/donations/my-accepted", {
            headers: { Authorization: `Bearer ${ngoToken}` }
          });
          setAvailableOrders(res.data);
        } catch (err) {
          console.error("Error fetching accepted donations:", err);
        }
      };
      fetchAccepted();
    }
  }, [activeSection]);

  // Load Tawk.to chat
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6894dcad6ec67e192b92260d/1j22ns424";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);


const Tabs = ({ activeSection, setActiveSection }) => (
  <div className="flex space-x-4 mb-4">
    <button
      className={`px-4 py-1 border rounded-full ${
        activeSection === "notifications" ? "bg-blue-500 text-white" : "bg-white"
      }`}
      onClick={() => setActiveSection("notifications")}
    >
      All
    </button>

    <button
      className={`px-4 py-1 border rounded-full ${
        activeSection === "notifications" ? "bg-blue-500 text-white" : "bg-white"
      }`}
      onClick={() => setActiveSection("notifications")}
    >
      Unread
    </button>

    <button
      className={`px-4 py-1 border rounded-full ${
        activeSection === "availableOrders" ? "bg-blue-500 text-white" : "bg-white"
      }`}
      onClick={() => setActiveSection("availableOrders")}
    >
      Accepted Orders
    </button>
  </div>
);




  
  return (
    <div>
      <TopNavbar />
      <div className="flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} ngo={ngo}/>

        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          
          <div className="bg-[#002D3D] text-white font-semibold text-lg px-6 py-2 rounded mb-4">
            Donor Details
          </div>
          <Tabs activeSection={activeSection} setActiveSection={setActiveSection}/>

          {activeSection === "notifications" && Array.isArray(notifications) && notifications.map(order => (
            <DonationCard
              key={order._id}
              order={order}
              onAccept={() => handleAccept(order._id)}
            />
          ))}

          {activeSection === "availableOrders" && Array.isArray(availableOrders) && availableOrders.map(order => (
            <DonationCardAccepted
              key={order._id}
              order={order}
              navigate={navigate}
              currentUser={ngo}
            />
          ))}

          {activeSection === "dashboard" && (
            <p className="text-gray-600 text-sm">Dashboard coming soon...</p>
          )}
          {activeSection === "settings" && (
            <p className="text-gray-600 text-sm">Settings page coming soon...</p>
          )}
        </div>
      </div>
    </div>
  );
};


  export default DonateVerseDashboard;
import React from "react";
import MyMap from "./MyMap";
const NGODashboard = ({ onNavigate }) => {

  return (
    <div style={styles.dashboard}>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f5f5f5;
          }

          .header {
            background-color: rgba(11, 38, 51, 1);
            color: white;
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }

          .ngo-name {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .stats-cards {
            display: flex;
            gap: 20px;
            margin: 20px 0;
            flex-wrap: wrap;
          }

          .card {
           flex: 1;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            width: 30%;
            min-width: 200px;
             max-width: 33%;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.15);
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;
            margin: 20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }

          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
          }

          th {
            background-color: rgba(11, 38, 51, 1);
            color: white;
          }

          .gallery {
            display: flex;
            gap: 10px;
            margin: 20px 0;
            flex-wrap: wrap;
          }

          .gallery img {
            width: 32%;
            min-width: 200px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s;
          }

          .gallery img:hover {
            transform: scale(1.05);
          }

          .notifications ul {
            list-style-type: disc;
            padding-left: 20px;
            background: #ffffff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }

          .map-integration {
            margin: 20px 0;
          }

          .map-integration img {
            width: 100%;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .dashboard-footer {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
          }

          .dashboard-footer button {
            padding: 10px 20px;
            background-color: rgba(11, 38, 51, 1);
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
          }

          .dashboard-footer button:hover {
            background-color: rgba(20, 58, 72, 1);
            transform: translateY(-2px);
          }

          @media screen and (max-width: 768px) {
            .stats-cards {
              flex-direction: column;
            }
            .card {
              width: 100%;
            }
            .gallery img {
              width: 100%;
            }
            .dashboard-footer {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
    
      </style>

      <div className="header">
        <h2>NGO DASHBOARD</h2>
        <div className="ngo-name">
          <img src="/logo.jpg" alt="Logo" height="40" />
          <strong>Helping Hands NGO</strong>
        </div>
      </div>

      <div style={{ padding: "20px 40px" }}>
        <h3>Welcome, Helping Hands NGO!</h3>

        <div className="stats-cards">
          <div className="card">
            <p>Total Donations Collected</p>
            <h4>25</h4>
          </div>
          <div className="card">
            <p>Total Quantity Collected</p>
            <h4>350 kg</h4>
          </div>
          <div className="card">
            <p>Pending Pickups</p>
            <h4>3</h4>
          </div>
        </div>

        <h4>Accepted Donations</h4>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Restaurant Name</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-06-25</td>
              <td>Chapati</td>
              <td>100 plates</td>
              <td>Completed</td>
              <td>FoodFeeds</td>
              <td>★★★★★</td>
            </tr>
            <tr>
              <td>2025-06-24</td>
              <td>Rice</td>
              <td>50 kg</td>
              <td>Completed</td>
              <td>Swad Punj Veg</td>
              <td>★★★★☆</td>
            </tr>
          </tbody>
        </table>

        <h4>Food Photo Gallery</h4>
        <div className="gallery">
          <img src="/images/d1.jpeg" alt="food1"/>
          <img src="/images/d2.jpeg" alt="food2"/>
          <img src="/images/d3.jpeg" alt="food3"/>
        </div>

        <div className="notifications">
          <h4>Notifications</h4>
          <ul>
            <li>🔔New donation accepted from Delicious Bites Restaurant.</li>
            <li>🔔Pickup scheduled for 2025-06-24 at 11 AM.</li>
            <li>🔔You earned the Star Collector badge!</li>
          </ul>
        </div>

        <div className="map-integration">
          <h4>Map Integration</h4>
           <MyMap/>
        </div>

       <div className="dashboard-footer">
  <button onClick={() => onNavigate("report")}>Download Reports</button>
  <button onClick={() => alert("Edit Profile page coming soon...")}>Edit Profile</button>
  <button onClick={() => alert("Change Password functionality coming soon...")}>Change Password</button>
  <button onClick={() => alert("You have been logged out!")}>Logout</button>
</div>

      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    background: "#f0f0f0",
    minHeight: "100vh"
  }
};

export default NGODashboard;

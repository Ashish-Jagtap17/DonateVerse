import React from "react";

const NGOReport = ({ onNavigate }) => {
  const handleDownload = () => {
    const data = "Date,Food Item,Quantity,Status,Restaurant,Rating\n" +
      "2025-06-25,Chapati,100 plates,Completed,FoodFeeds,5\n" +
      "2025-06-24,Rice,50 kg,Completed,Swad Punj Veg,4\n";

    const blob = new Blob([data], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ngo_donation_report.csv";
    link.click();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>
      <style>{`
        .report-title { text-align: center; color: #0B2633; }
        .summary-cards {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 30px 0;
          flex-wrap: wrap;
        }
        .summary-card {
          flex: 1;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          min-width: 200px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background: #ffffff;
          margin-top: 20px;
        }
        th, td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: center;
        }
        th {
          background-color: #0B2633;
          color: white;
        }
        .download-btn {
          margin-top: 30px;
          padding: 12px 25px;
          background-color: #0B2633;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
          margin-right: 10px;
        }
        .download-btn:hover {
          background-color: #16485e;
        }
      `}</style>

      <h2 className="report-title">Donation Report - Helping Hands NGO</h2>

      <div className="summary-cards">
        <div className="summary-card"><h4>Total Donations</h4><p>25</p></div>
        <div className="summary-card"><h4>Total Quantity Collected</h4><p>350 kg</p></div>
        <div className="summary-card"><h4>Contributing Restaurants</h4><p>8</p></div>
        <div className="summary-card"><h4>Top Rated Restaurant</h4><p>FoodFeeds ⭐</p></div>
      </div>

      <h4>Donation History</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Restaurant</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>2025-06-25</td><td>Chapati</td><td>100 plates</td><td>Completed</td><td>FoodFeeds</td><td>★★★★★</td></tr>
          <tr><td>2025-06-24</td><td>Rice</td><td>50 kg</td><td>Completed</td><td>Swad Punj Veg</td><td>★★★★☆</td></tr>
        </tbody>
      </table>

      <div>
        <button className="download-btn" onClick={() => onNavigate("dashboard")}>⬅ Back to Dashboard</button>
        <button className="download-btn" onClick={handleDownload}>Download Report</button>
      </div>
    </div>
  );
};

export default NGOReport;

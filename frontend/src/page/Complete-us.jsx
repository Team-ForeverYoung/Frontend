import React, { useState } from 'react';
import "./Complete.css";
import { useNavigate } from 'react-router-dom';
import { getBaseInstance } from "../service/config";

const CompletePage_us = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [totalPoint, setTotalPoint] = useState(null);

  const handleCheckPoint = async () => {
    if (!userId.trim()) {
      alert("Please enter the user ID.");
      return;
    }

    try {
      const axiosInstance = getBaseInstance();
      const response = await axiosInstance.get(`/point_us/${userId}`);

      const data = response;
      console.log(data);
      console.log(data.data);

      setPurchasedItems(data.details || []);

      const sum = (data.details || []).reduce((acc, item) => acc + item.point, 0);
      setTotalPoint(sum);
    } catch (error) {
      console.error("Error fetching point data:", error);
      alert("Failed to retrieve point information.");
    }
  };

  return (
    <div className="complete-container">
      <div className="complete-left ml-[15%]">
        <h2 className="complete-title">Check Your Points</h2>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button className="complete-button" onClick={handleCheckPoint}>
            Check Points
          </button>
        </div>

        {totalPoint !== null && (
          <div style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}>
            Total Earned Points: {totalPoint.toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletePage_us;

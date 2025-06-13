import React, { useEffect, useState } from 'react';
import "./Complete.css";
import { useNavigate } from 'react-router-dom';

const CompletePage_us = () => {
  const navigate = useNavigate();
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    fetch('http://54.80.200.128:8080/api/point')
      .then(res => res.json())
      .then(data => {
        setPurchasedItems(data);
      })
      .catch(err => {
        console.error("Failed to fetch order data:", err);
      });
  }, []);

  const totalPoint = purchasedItems.reduce((acc, item) => acc + item.point, 0);

  return (
    <div className="complete-container">
      <div className="complete-left">
        <h2 className="complete-title">Your order has been completed.</h2>

        <div className="purchased-items">
          <h4>Total Earned Points</h4>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>{totalPoint.toLocaleString()} Points</p>
        </div>

        <button className="complete-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

      <div className="cart-right">
        <div className="cart-steps">
          <span className="step">01 Cart</span>
          <span className="step active">02 Order Complete</span>
        </div>

        <div className="cart-benefit-box">
          <h4 className="cart-section-title">Benefits</h4>
          <p className="cart-description">No benefits available.</p>
        </div>
      </div>
    </div>
  );
};

export default CompletePage_us;

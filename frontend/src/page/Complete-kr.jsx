import React, { useEffect, useState } from 'react';
import "./Complete.css";
import { useNavigate } from 'react-router-dom';

const CompletePage_kr = () => {
  const navigate = useNavigate();
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    fetch('http://54.180.135.26:8080/api/point')
      .then(res => res.json())
      .then(data => {
        setPurchasedItems(data);
        alert("포인트가 성공적으로 조회 되었습니다!");
      })
      .catch(err => {
        console.error("주문 데이터 조회 실패:", err);
      });
  }, []);

  const totalPoint = purchasedItems.reduce((acc, item) => acc + item.point, 0);

  const handleCheckPoint = () => {
    alert(`적립된 포인트는 총 ${totalPoint.toLocaleString()}점입니다.`);
  };

  return (
    <div className="complete-container">
      <div className="complete-left">
        <h2 className="complete-title">주문이 완료되었습니다.</h2>

        <div className="purchased-items">
          <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>포인트가 적립될 예정입니다.</h4>
        </div>

        <button className="complete-button" onClick={handleCheckPoint}>
          포인트 확인하기
        </button>
      </div>

      <div className="cart-right">
        <div className="cart-steps">
          <span className="step">01 장바구니</span>
          <span className="step active">02 주문완료</span>
        </div>

        <div className="cart-benefit-box">
          <h4 className="cart-section-title">적립혜택</h4>
          <p className="cart-description">적립 혜택이 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default CompletePage_kr;

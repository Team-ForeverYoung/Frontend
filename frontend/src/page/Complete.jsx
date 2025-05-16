import React, { useEffect, useState } from 'react';
import "./Complete.css";
import { useNavigate } from 'react-router-dom';

const CompletePage = () => {
  const navigate = useNavigate();
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/order')
      .then(res => res.json())
      .then(data => {
        setPurchasedItems(data);
      })
      .catch(err => {
        console.error("주문 데이터 조회 실패:", err);
      });
  }, []);

  const totalPrice = purchasedItems.reduce((acc, item) => acc + item.salePrice, 0);

  return (
    <div className="complete-container">
      <div className="complete-left">
        <h2 className="complete-title">주문이 완료되었습니다.</h2>

        {purchasedItems.length > 0 ? (
          <div className="purchased-items">
            <h4>구매한 상품 목록</h4>
            <ul>
              {purchasedItems.map((item, index) => (
                <li key={index} className="purchased-item">
                  <img src={item.image} alt="상품" className="cart-item-image" />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.salePrice.toLocaleString()}원</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>구매한 상품이 없습니다.</p>
        )}

        <button className="complete-button" onClick={() => navigate("/")}>
          메인으로 돌아가기
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

        <div className="cart-price-box">
          <h4 className="cart-section-title">결제 예정금액</h4>
          <div className="price-row">
            <span>상품금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <div className="price-row">
            <span>할인금액</span>
            <span className="discount">0원</span>
          </div>
          <hr className="divider" />
          <div className="price-row total">
            <span>합계</span>
            <span className="total-price">{totalPrice.toLocaleString()}원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;

import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Cart_us = () => {
  const navigate = useNavigate();
  const navigateToComplete = async () => {
    const purchasedItems = selectedItems.map(index => cartItems[index]);
  
    try {
      const response = await fetch('http://localhost:8080/api/point', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchasedItems)  // 배열만 보냄
      });
  
      if (response.ok) {
        navigate("/Complete", { state: { purchasedItems } });
      } else {
        console.error('주문 실패:', response.statusText);
        alert('주문에 실패했습니다.');
      }
    } catch (error) {
      console.error('서버 요청 중 오류:', error);
      alert('서버 연결에 실패했습니다.');
    }
  };
  
  

  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    const stored = Cookies.get('cartItems');
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const handleCheckboxChange = (index) => {
    if (selectedItems.includes(index)) {
      const newSelection = selectedItems.filter(i => i !== index);
      setSelectedItems(newSelection);
      setAllSelected(false);
    } else {
      const newSelection = [...selectedItems, index];
      setSelectedItems(newSelection);
      if (newSelection.length === cartItems.length) {
        setAllSelected(true);
      }
    }
  };

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((_, index) => index));
    }
    setAllSelected(!allSelected);
  };

  const handleDeleteSelected = () => {
    const updatedCart = cartItems.filter((_, i) => !selectedItems.includes(i));
    Cookies.set('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setSelectedItems([]);
    setAllSelected(false);
  };

  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.salePrice, 0);

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2 className="cart-title">장바구니</h2>
        <div className="cart-header">
          <div className="cart-check-delete">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={handleSelectAll}
            /> 전체선택 |
            <button onClick={handleDeleteSelected} disabled={selectedItems.length === 0}>선택삭제</button>
          </div>
        </div>
        <hr />

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <input
                type="checkbox"
                checked={selectedItems.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
              <img src={item.image} alt="상품" className="cart-item-image" />
              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">{item.salePrice.toLocaleString()}원</p>
              </div>
            </div>
          ))
        ) : (
          <div className="cart-empty">
            <div className="cart-empty-icon">❗</div>
            <p className="cart-empty-message">장바구니에 담긴 상품이 없습니다.</p>
          </div>
        )}
      </div>

      <div className="cart-right">
        <div className="cart-steps">
          <span className="step active">01 장바구니</span>
          <span className="step">02 주문완료</span>
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

        <button className="order-button" onClick={navigateToComplete}>
          주문하기
        </button>
      </div>
    </div>
  );
};

export default Cart_us;

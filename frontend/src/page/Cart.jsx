import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getBaseInstance } from "../service/config";
const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [userId, setUserId] = useState(''); // userId 입력 상태 추가

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

  const navigateToComplete = async () => {
    const payload = {
      price: totalPrice,
      userId: userId // userId도 서버로 전송
    };

    try {
      console.log(payload);
      console.log(payload);
      const axiosInstance = getBaseInstance();
      const response = await axiosInstance.post("/point", payload);

      if (response.ok) {
        navigate("/CompletePage_kr", { state: { purchasedItems: payload } });
      } 
      // else {
      //   console.error('주문 실패:', response.statusText);
      //   alert('주문에 실패했습니다.');
      // }
    } catch (error) {
      console.error('서버 요청 중 오류:', error);
      alert('서버 연결에 실패했습니다.');
    }
  };

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
            <button onClick={handleDeleteSelected} disabled={selectedItems.length === 0}>
              선택삭제
            </button>
          </div>
        </div>
        <hr />

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="ml-[35%]" key={index}>
              <input
                type="checkbox"
                checked={selectedItems.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
              <img src={item.image} alt="상품" className="w-[40%] h-[40%]" />
              <div className="inline">
                <p className="">{item.name}</p>
                <p className="">{item.salePrice.toLocaleString()}원</p>
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

        {/* userId 입력 필드 추가 */}
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID를 입력하세요"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <button className="order-button" onClick={navigateToComplete}>
          주문하기
        </button>
      </div>
    </div>
  );
};

export default Cart;

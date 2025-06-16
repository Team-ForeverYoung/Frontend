import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getBaseInstance } from "../service/config";

const CartUS = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [userId, setUserId] = useState(''); // userId input state

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
      userId: userId
    };

    try {
      console.log(payload);
      const axiosInstance = getBaseInstance();
      const response = await axiosInstance.post("/point_us", payload);
      if (response.ok) {
        navigate("/CompletePage_us", { state: { purchasedItems: payload } });
      } 
      // else {
      //   console.error('Order failed:', response.statusText);
      //   alert('Order failed.');
      // }
    } catch (error) {
      console.error('Server error:', error);
      alert('Failed to connect to the server.');
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2 className="cart-title">Cart</h2>
        <div className="cart-header">
          <div className="cart-check-delete">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={handleSelectAll}
            /> Select All |
            <button onClick={handleDeleteSelected} disabled={selectedItems.length === 0}>
              Delete Selected
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
              <img src={item.image} alt="Product" className="w-[40%] h-[40%]" />
              <div className="inline">
                <p>{item.name}</p>
                <p>{item.salePrice.toLocaleString()} KRW</p>
              </div>
            </div>
          ))
        ) : (
          <div className="cart-empty">
            <div className="cart-empty-icon">❗</div>
            <p className="cart-empty-message">Your cart is empty.</p>
          </div>
        )}
      </div>

      <div className="cart-right">
        <div className="cart-steps">
          <span className="step active">01 Cart</span>
          <span className="step">02 Order Complete</span>
        </div>

        <div className="cart-benefit-box">
          <h4 className="cart-section-title">Benefits</h4>
          <p className="cart-description">No benefits available.</p>
        </div>

        <div className="cart-price-box">
          <h4 className="cart-section-title">Payment Amount</h4>
          <div className="price-row">
            <span>Product Total</span>
            <span>{totalPrice.toLocaleString()} KRW</span>
          </div>
          <div className="price-row">
            <span>Discount</span>
            <span className="discount">0 KRW</span>
          </div>
          <hr className="divider" />
          <div className="price-row total">
            <span>Total</span>
            <span className="total-price">{totalPrice.toLocaleString()} KRW</span>
          </div>
        </div>

        {/* userId input */}
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <button className="order-button" onClick={navigateToComplete}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartUS;

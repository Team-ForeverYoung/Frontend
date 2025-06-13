import React from 'react';
import { useNavigate } from 'react-router-dom';
import productKRWata from '../data/productUS.json';
import Cookies from 'js-cookie';

const ProductUSListPage = () => {
  const navigate = useNavigate();
  const products = Object.values(productKRWata.products).slice(0, 10);

  const handleClick = (index) => {
    navigate(`/productUS/${index}`);
  };

  const handleAddToCart = (productUS) => {
  const stored = Cookies.get('cartItems');
  let cart = stored ? JSON.parse(stored) : [];

  cart.push(productUS);
  Cookies.set('cartItems', JSON.stringify(cart), { expires: 7 });
  alert('Added to cart!');
  navigate('/CartUS');  // <<< Add to Cart 후 CartUS 페이지로 이동 추가
};


  return (
    <div className="grid grid-cols-4 gap-10 px-6 py-8 w-[80%] h-[100%] mt-[5%]">
      {products.map((productUS, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer p-4 w-[95%] h-[95%] ml-[50%]"
        >
          <img
            src={productUS.image}
            alt={productUS.name}
            className="w-full h-[140px] object-cover rounded-md mb-4"
            onClick={() => handleClick(index)}
          />
          <h3 className="text-xs font-medium text-gray-800 truncate w-full text-center mb-2">
            {productUS.name}
          </h3>
          <p className="text-sm font-bold text-red-500 text-center mb-1">
            {productUS.salePrice.toLocaleString()} KRW
          </p>
          <p className="text-xs text-gray-400 line-through text-center">
            {productUS.originalPrice.toLocaleString()} KRW
          </p>
          <button
            onClick={() => handleAddToCart(productUS)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded block mx-auto"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductUSListPage;

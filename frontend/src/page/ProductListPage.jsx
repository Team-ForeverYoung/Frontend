import React from 'react';
import { useNavigate } from 'react-router-dom';
import productData from '../data/product.json';
import Cookies from 'js-cookie';

const ProductListPage = () => {
  const navigate = useNavigate();
  const products = Object.values(productData.products).slice(0, 10);

  const handleClick = (index) => {
    navigate(`/product/${index}`);
  };

  const handleAddToCart = (product) => {
    const stored = Cookies.get('cartItems');
    let cart = stored ? JSON.parse(stored) : [];

    cart.push(product);
    Cookies.set('cartItems', JSON.stringify(cart), { expires: 7 });
    alert('장바구니에 담겼습니다!');
  };

  return (
    <div className="grid grid-cols-4 gap-10 px-6 py-8 w-[80%] h-[100%] mt-[5%]">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer p-4 w-[95%] h-[95%] ml-[50%]"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[140px] object-cover rounded-md mb-4"
            onClick={() => handleClick(index)}
          />
          <h3 className="text-xs font-medium text-gray-800 truncate w-full text-center mb-2">
            {product.name}
          </h3>
          <p className="text-sm font-bold text-red-500 text-center mb-1">
            {product.salePrice.toLocaleString()}원
          </p>
          <p className="text-xs text-gray-400 line-through text-center">
            {product.originalPrice.toLocaleString()}원
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded block mx-auto"
          >
            장바구니 담기
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;

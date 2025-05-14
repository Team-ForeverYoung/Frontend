// import React from 'react';
// import "./ProductDescription.css";
// import { useNavigate, useParams } from 'react-router-dom';
// import productData from '../data/product.json';
// import Cookies from 'js-cookie';

// const ProductDetailPage = () => {
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const product = productData.products[productId];

//   if (!product) {
//     return <div className="product-detail-container">존재하지 않는 상품입니다.</div>;
//   }

//   const handleAddToCart = () => {
//     const item = {
//       name: product.name,
//       salePrice: product.salePrice,
//       image: product.image
//     };
  
//     const existingCart = Cookies.get('cartItems');
//     const cart = existingCart ? JSON.parse(existingCart) : [];
  
//     // 이미 동일한 상품이 있는지 확인
//     const isAlreadyInCart = cart.some(
//       (cartItem) => cartItem.name === item.name
//     );
  
//     // 중복이 아니라면 추가
//     if (!isAlreadyInCart) {
//       cart.push(item);
//       Cookies.set('cartItems', JSON.stringify(cart));
//     }
  
//     navigate('/Cart');
//   };
  

//   return (
//     <div className="product-detail-container">
//       <div className="product-image-section">
//         <img
//           src={product.image}
//           alt="product"
//           className="main-product-image"
//         />
//         <div className="review-section">
//           <span className="review-label">고객 리뷰</span>
//           <span className="stars">⭐⭐⭐⭐⭐</span>
//           <span className="score">4.8 (3,326건)</span>
//         </div>
//       </div>

//       <div className="product-info-section">
//         <h2 className="product-title">{product.name}</h2>

//         <div className="price-info">
//           <span className="original-price">
//             {product.originalPrice.toLocaleString()}원
//           </span>
//           <span className="sale-price">
//             {product.salePrice.toLocaleString()}원
//           </span>
//         </div>

//         <div className="product-tags">
//           <span className="tag-sale">세일</span>
//           <span className="tag-coupon">쿠폰</span>
//           <span className="tag-gift">증정</span>
//           <span className="tag-today">오늘드림</span>
//         </div>

//         <div className="product-meta">👁 474명이 보고있어요</div>

//         <div className="shipping-info">
//           <div className="shipping-title">배송정보</div>
//           <p><strong>일반배송</strong> 2,500원 (20,000원 이상 무료배송) | 올리브영 배송 평균 3일 이내 배송</p>
//           <p><strong>오늘드림</strong> 2,500원 또는 5,000원</p>
//           <p><strong>픽업</strong> 배송비 조건 없음</p>
//         </div>

//         <div className="payment-title">결제혜택</div>
//         <div className="payment-info">
//           <p>THE CJ 카드 추가 10% 할인</p>
//           <p>CJ ONE 포인트 최대 1% 적립 예상</p>
//         </div>

//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           장바구니
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

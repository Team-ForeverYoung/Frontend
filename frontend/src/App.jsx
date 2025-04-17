import { Routes, Route, Link } from "react-router-dom";

import ProductDetailPage from "./page/ProductDescription";
import CartPage from "./page/Cart";
import CompletePage from "./page/Complete";
import Home from "./page/Home";
import TestUserRegisterPage from "./page/test/TestUserRegisterPage";
import TestUserInfoPage from "./page/test/TestUserInfoPage";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/product/1">상품 1</Link> |{" "}
        <Link to="/product/2">상품 2</Link> |{" "}
        <Link to="/Cart">장바구니</Link> |{" "}
        <Link to="/Complete">주문완료</Link> |{" "}
        <Link to="/test/register">테스트 등록</Link> |{" "}
        <Link to="/test/info">테스트 정보</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div></div>} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Complete" element={<CompletePage />} />
      </Routes>
    </div>
  );
}

export default App;

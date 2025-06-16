import { Routes, Route, Link, useLocation } from "react-router-dom";

import ProductDetailPage from "./page/ProductDescription";
import ProductListPage from "./page/ProductListPage";
import ProductUSListPage from "./page/ProductUSListPage";
import CartPage from "./page/Cart";
import CartUS from "./page/CartUS";
import CompletePage from "./page/Complete";
import Home from "./page/Home";
import TestUserRegisterPage from "./page/test/TestUserRegisterPage";
import TestUserInfoPage from "./page/test/TestUserInfoPage";
import OliveUserRegisterPage from "./page/user/OliveUserRegisterPage";
import UserLoginPage from "./page/user/UserloginPage";
import EventJoinPage from "./page/event/EventJoinPage";
import CompletePage_kr from "./page/Complete-kr";
import CompletePage_us from "./page/Complete-us";

function App() {
  const location = useLocation();
  const isUSPage = location.pathname.startsWith("/productsUS");

  const bannerImage = isUSPage ? "/imagesUS/gara.png" : "/images/gara.png";

  return (
    <div className="App">
      <nav className="w-[100%]">
        <Link to="/home">Home</Link> |{" "}
        <Link to="/products">상품 목록</Link> |{" "}
        <Link to="/productsUS">미국 상품 목록</Link> |{" "}
        <Link to="/Cart">장바구니</Link> |{" "}
        <Link to="/CartUS">Cart US</Link> |{" "}
        <Link to="/Complete">주문완료</Link> |{" "}
        <Link to="/CompletePage_us">US Complete</Link>
        <Link to="/event">올영세일</Link>
        
      </nav>
      <img src={bannerImage} className="w-[100%] h-[10%]" />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/productsUS" element={<ProductUSListPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/CartUS" element={<CartUS />} />
        <Route path="/CompletePage_kr" element={<CompletePage_kr />} />
        <Route path="/CompletePage_us" element={<CompletePage_us />} />
        <Route path="/Complete" element={<CompletePage />} />
        <Route path="/event" element={<EventJoinPage />} />
      </Routes>
    </div>
  );
}

export default App;

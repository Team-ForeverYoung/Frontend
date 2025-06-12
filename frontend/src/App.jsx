import { Routes, Route, Link } from "react-router-dom";

import ProductDetailPage from "./page/ProductDescription";
import ProductListPage from "./page/ProductListPage"; // 👈 추가
import CartPage from "./page/Cart";
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
  return (
    <div className="App">
      <nav className="w-[100%]">
        <Link to="/home">Home</Link> |{" "}
        <Link to="/products">상품 목록</Link> |{" "} {/* 👈 새 링크 추가 */}
        <Link to="/product/1">상품 1</Link> |{" "}
        <Link to="/product/2">상품 2</Link> |{" "}
        <Link to="/Cart">장바구니</Link> |{" "}
        <Link to="/Complete">주문완료</Link> |{" "}
        <Link to="/test/register">테스트 등록</Link> |{" "}
        <Link to="/test/info">테스트 정보</Link> |{" "}
        <Link to="/login">로그인</Link> |{" "}
        <Link to="/join">회원가입</Link> |{" "}
        <Link to="/event">이벤트</Link>
      </nav>
      <img src="../public/images/gara.png" className="w-[100%] h-[10%]"/>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductListPage />} /> {/* 👈 라우트 추가 */}
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/CompletePage_kr" element={<CompletePage_kr />} />
        <Route path="/CompletePage_us" element={<CompletePage_us />} />
        <Route path="/Complete" element={<CompletePage />} />
        <Route path="/test/register" element={<TestUserRegisterPage />} />
        <Route path="/test/info" element={<TestUserInfoPage />} />
        <Route path="/join" element={<OliveUserRegisterPage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/event" element={<EventJoinPage />} />
      </Routes>
    </div>
  );
}

export default App;

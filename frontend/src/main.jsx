// import App from './App';
// import App from './App.jsx';
// import OliveUserRegisterPage from './page/test/OliveUserRegisterPage.jsx'
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from 'react';
import TestUserRegisterPage from './page/test/TestUserRegisterPage.jsx';
import TestUserInfoPage from './page/test/TestUserInfoPage.jsx';
import UserloginPage from './page/test/UserloginPage.jsx'
import { initBaseInstance } from './service/config.js';


async function main() {
  await initBaseInstance();

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/test/register" element={<TestUserRegisterPage/>}/>
          <Route path="/test/info" element={<TestUserInfoPage/>}/>
          <Route path="/test/login" element={<UserloginPage/>}/>
        </Routes>
      </Router>
    </StrictMode>
  );
}

main();
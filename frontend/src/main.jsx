// import App from './App';
// import App from './App.jsx';

import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from 'react';
import TestUserRegisterPage from './page/test/TestUserRegisterPage.jsx';
import TestUserInfoPage from './page/test/TestUserInfoPage.jsx';
import OliveUserRegisterPage from './page/user/OliveUserRegisterPage.jsx'
import UserloginPage from './page/user/UserloginPage.jsx'
import EventJoinPage from './page/event/EventJoinPage.jsx'

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
          <Route path="/join" element={<OliveUserRegisterPage/>}/>
          <Route path="/login" element={<UserloginPage/>}/>
          <Route path="/event" element={<EventJoinPage/>}/>
          
        </Routes>
      </Router>
    </StrictMode>
  );
}

main();


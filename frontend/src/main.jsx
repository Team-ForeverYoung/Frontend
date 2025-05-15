import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Router와 Routes, Route import
import './index.css';
import App from './App.jsx';
import TestUserRegisterPage from './page/test/TestUserRegisterPage.jsx';
import TestUserInfoPage from './page/test/TestUserInfoPage.jsx';
import OliveUserRegisterPage from './page/test/OliveUserRegisterPage.jsx'
import UserloginPage from './page/test/UserloginPage.jsx'


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/test/register" element={<TestUserRegisterPage/>}/>
        <Route path="/test/info" element={<TestUserInfoPage/>}/>
        <Route path="/join" element={<OliveUserRegisterPage/>}/>
        <Route path="/login" element={<UserloginPage/>}/>
      </Routes>
    </Router>
  </StrictMode>
);

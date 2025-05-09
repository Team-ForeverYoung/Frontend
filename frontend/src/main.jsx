import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import App from './App.jsx';
import TestUserRegisterPage from './page/test/TestUserRegisterPage.jsx';
import TestUserInfoPage from './page/test/TestUserInfoPage.jsx';
import OliveUserRegisterPage from './page/test/OliveUserRegisterPage.jsx'
import UserloginPage from './page/test/UserloginPage.jsx'


const root = createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/test/register" element={<TestUserRegisterPage/>}/>
        <Route path="/test/info" element={<TestUserInfoPage/>}/>
        <Route path="/test/join" element={<OliveUserRegisterPage/>}/>
        <Route path="/test/login" element={<UserloginPage/>}/>
      </Routes>
    </Router>
  </StrictMode>
);

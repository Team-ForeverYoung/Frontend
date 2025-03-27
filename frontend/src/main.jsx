import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Router와 Routes, Route import
import './index.css';
import App from './App.jsx';
import TestPage from './page/test/TestPage.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/test" element={<TestPage/>}/>
      </Routes>
    </Router>
  </StrictMode>
);

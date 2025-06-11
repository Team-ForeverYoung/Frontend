import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { StrictMode } from 'react';
import App from './App';
import { initBaseInstance } from './service/config.js';

async function main() {
  await initBaseInstance();

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  );
}

main();

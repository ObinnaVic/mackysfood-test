import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextApi from './components/contextApi';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter hashType="slash">
      <ContextApi>
        <App />
      </ContextApi>
    </HashRouter>
  </React.StrictMode>
);


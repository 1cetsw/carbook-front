import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./GlobalConfig";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './Css/App.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
    <App />
    </BrowserRouter>,
 
);

reportWebVitals();

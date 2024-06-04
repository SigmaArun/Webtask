import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

//import App from './foodappexecution/src/App';
// react boot strap configration
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';
import App from './ecommerceWebsite/App.js';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> 
);


reportWebVitals();

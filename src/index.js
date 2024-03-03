import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './project2/App';
//import App from './FirstReactProject/App';
 import App from './003 01-starting-project/01-starting-project/src/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);


reportWebVitals();

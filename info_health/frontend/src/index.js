import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthProvider';
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(

  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        
          <App />
         
      </BrowserRouter>
    </AuthProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

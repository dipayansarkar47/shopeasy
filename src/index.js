import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import SidebarContextProvider from './contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarContextProvider>

      <CartContextProvider>

        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </CartContextProvider>
    </SidebarContextProvider>
  </React.StrictMode>
);

reportWebVitals();

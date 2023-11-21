import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import SidebarContextProvider from './contexts/SidebarContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarContextProvider>
    <CartContextProvider>
      <ProductContextProvider>
        <React.StrictMode>
          <Auth0Provider
            domain='dev-auz4ckzu0xrjwx21.us.auth0.com'
            clientId='fwUyifrQbkeKFOs8tWKhbn4yTycxpsYU'
            authorizationParams={{
              redirect_uri: window.location.origin
            }}
          >

            <App />
          </Auth0Provider>
        </React.StrictMode>
      </ProductContextProvider>
    </CartContextProvider>
  </SidebarContextProvider>
);

reportWebVitals();

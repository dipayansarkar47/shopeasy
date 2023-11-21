import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import { useAuth0 } from '@auth0/auth0-react';


const Checkout = () => {
  const { cart, total } = useContext(CartContext);
  const {isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
      {isAuthenticated ? <div className="my-5">
        <div className="">
            <h4 className="text-4xl mb-3">
              Your cart
            </h4>
          <div className="flex flex-row gap-2">
            <div className='w-1/2'>

              <ul className="list-group mb-3">
                {cart.map((item) => {
                  return <CartItem item={item} key={item.id} />;
                })}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${parseFloat(total).toFixed(2)}</strong>
                </li>
              </ul>
            </div>
            <div className='w-1/2'>

              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> : <div onClick={() => loginWithRedirect()} className='h-screen cursor-pointer flex flex-col justify-center items-center'> <div className='bg-black rounded text-white font-medium p-2'>Please Login</div></div>}
      
    </>
  )
}

export default Checkout
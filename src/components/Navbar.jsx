import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ value, onChangeData }) => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  console.log(user);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="flex flex-row justify-center items-center gap-1">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
            <span className="w-[40px] font-semibold text-xl">Shopeasy</span>
          </div>
        </Link>



        {/* cart */}
        <div className="flex flex-row gap-4">


          <div
            onClick={() => { setIsOpen(!isOpen); console.log("Clicked"); }}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-0 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          {isAuthenticated ? <Link to="/profile">
            <img className="w-[26px] h-[26px] rounded" src={user.picture} alt="" />
          </Link> : <div onClick={() => loginWithRedirect()} className="bg-black cursor-pointer rounded px-2 text-white font-medium py-1">
            Login
          </div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
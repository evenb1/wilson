import { useState, useContext } from "react";
import { headerLogo, bagIcon } from '../assets/images'; // Assuming you have a bag icon
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
import { CartContext } from '../context/CartContext'; // Import the Cart Context

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // Access cart items from context

  return (
    <header className="padding-x absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={100} height={30} />
        </a>

        <ul className="flex-1 flex justify-end items-center max-lg:hidden gap-14">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-black">
                {item.label}
              </a>
            </li>
          ))}

          {/* Bag Icon */}
          <li className="relative cursor-pointer">
            <img src={bagIcon} alt="Bag" className="w-8 h-8" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {cartItems.length} {/* Display number of items in the cart */}
              </span>
            )}
          </li>
        </ul>

        <div className="hidden max-lg:block">
          <img 
            src={hamburger} 
            alt="hamburger" 
            width={25} 
            height={25} 
            onClick={() => setIsNavOpen(true)} 
            className="cursor-pointer"
          />
        </div>
        
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-20 flex flex-col justify-center items-center transition-transform transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsNavOpen(false)} 
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="text-center">
            {navLinks.map((item) => (
              <li key={item.label} className="mb-8 uppercase">
                <a href={item.href} className="text-xl font-montserrat text-black">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

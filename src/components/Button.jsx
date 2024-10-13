import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Button = ({ label, iconURL, onClick }) => {
  return (
    <button
      onClick={onClick} // Add click handler for adding to cart
      className="flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-lg leading-none bg-customcolor rounded-full text-white hover:animate-slide-in-right"
    >
      {label}
      <img src={iconURL} alt="right arrow" className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;

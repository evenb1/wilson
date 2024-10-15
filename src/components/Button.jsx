import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx'; // Ensure the path is correct

const Button = ({ label, iconURL, item }) => {
  const { addToCart } = useContext(CartContext); // Use the context

  const handleClick = () => {
    addToCart(item); // Add item to cart when the button is clicked
  };

  return (
    <button
      onClick={handleClick} 
      className="flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-lg leading-none bg-customcolor rounded-full text-white hover:animate-slide-in-right"
    >
      {label}
      <img src={iconURL} alt="right arrow" className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;

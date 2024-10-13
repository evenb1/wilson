import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'; // For icons

const CartSidebar = ({ isOpen, toggleSidebar }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className={`fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-50 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 bg-customcolor text-white">
        <h2 className="text-xl font-bold">Your Bag</h2>
        <AiOutlineClose size={24} className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your bag is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
                <img src={item.imgURL} alt={item.name} className="w-16 h-16 rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-4 border-t">
        <button className="w-full bg-customcolor text-white py-3 rounded-full font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;

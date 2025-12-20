import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { useCart } from "../Contexts/CartContext";
import { Link} from "react-router-dom";


function Navbar() {
  const [isMobileOpen, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, getTotalItems, getTotalPrice, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
 

  
  return (
    
      <nav className="max-w-7xl w-full top-0 z-50 fixed bg-white border-b border-gray-700/40">
        <div className=" px-5 py-3 flex items-center justify-between">
         <Link to="/"> <img src="/logo.svg" className="h-11 w-11" alt="Logo" /></Link>
          <div className="hidden md:flex md:gap-3">
            <Link to="/"> Home </Link>
            <a> About Us </a>
            <a>Contact</a>
          </div>
          <div className="flex gap-2 items-center">
            <button onClick={() => setShowCart(true)} className="relative">
              <ShoppingCart />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button>
              {isMobileOpen ? (
                <X onClick={() => setOpen(!isMobileOpen)} />
              ) : (
                <Menu
                  className="md:hidden"
                  onClick={() => setOpen(!isMobileOpen)}
                />
              )}
            </button>
          </div>
        </div>
        {isMobileOpen && (
          <div className="flex flex-col gap-2 items-end bg-white py-3 px-5">
            <Link to="/" onClick={() => setOpen(!isMobileOpen)}>
              Home
            </Link>
            <a> About Us </a>
            <a>Contact</a>
          </div>
        )}
     
      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setShowCart(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
            
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">
                  Shopping Cart ({getTotalItems()})
                </h2>
                <button onClick={() => setShowCart(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

            
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                  
                    <p className="text-gray-600">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b pb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-contain bg-gray-100 rounded"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-medium line-clamp-2">
                            {item.title}
                          </h3>
                          <p className=" font-bold mt-1">
                             ${item.price }
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-2 py-1 border rounded hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="px-2 py-1 border rounded hover:bg-gray-100"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-600 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            
              {cart.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>
                       ${getTotalPrice()}
                    </span>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
   </nav>
  );
}

export default Navbar;
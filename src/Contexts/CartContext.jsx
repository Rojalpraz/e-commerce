import { useState,useContext,createContext } from "react";

export const CartContext=createContext();

export const useCart=()=>useContext(CartContext);

export const CartProvider=({children})=>{
     const [cart, setCart] = useState([]);
 
  const addtoCart = (product) => {
    setCart((prevCart) => {
      const existsitems = prevCart.find((item) => item.id === product.id);

      if (existsitems) {
        return prevCart.map((item) =>
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      } else {
        return [...prevCart, {...product, quantity: 1}];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? {...item, quantity: item.quantity + 1} : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => item.id === productId && item.quantity > 1 ? {...item, quantity: item.quantity - 1}
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
   const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

const value={
    cart,
    setCart,
    addtoCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    getTotalItems
}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
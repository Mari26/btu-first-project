/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (_product) => {},
  removeItem: (_productId) => {},
  clearCart: () => {},
});


export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

 
  const removeItem = (productId) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem.quantity === 1) {
     
        return prevItems.filter((item) => item.id !== productId);
      } else {
     
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
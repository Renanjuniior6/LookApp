/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {

  const [user, setUser] = useState({});

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existentIndex = cart?.findIndex( p => p.id === product.id);
    let oldCart = cart;

    // SE EXISTIR NO CARRINHO
    if(existentIndex !== -1 ) {
      oldCart[existentIndex] = product;
    } else {
      oldCart.push(product);
    }

    setCart(oldCart);
  };

  const removeFromCart = () => {

  };

  return (
    <AppContext.Provider value={{ user, setUser, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

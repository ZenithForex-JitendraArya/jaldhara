// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // const [cartItems, setCartItems] = useState({});
    const [cartQuantity, setCartQuantity] = useState(0)

    // const updateQuantity = (productId, quantity) => {
    //     setCartItems(prev => ({
    //         ...prev,
    //         [productId]: quantity
    //     }));
    // };

    return (
        <CartContext.Provider value={{ cartQuantity, setCartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

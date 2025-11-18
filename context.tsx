import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product, SubscriptionFrequency } from './types';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, quantity: number, subscription: SubscriptionFrequency) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children?: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('goldenYolkCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage on change
  useEffect(() => {
    localStorage.setItem('goldenYolkCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number, subscription: SubscriptionFrequency) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.subscription === subscription);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.subscription === subscription
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, subscription }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
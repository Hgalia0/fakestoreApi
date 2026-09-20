import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <MainContainer
        onAddToCart={handleAddToCart}
      />

      <Cart
        cartItems={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemoveFromCart={handleRemoveFromCart}
      />

      {/* Cart button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-5 right-5 bg-black text-white px-4 py-3 rounded-full"
      >
        🛒 Cart ({cartItems.length})
      </button>
    </div>
  );
}
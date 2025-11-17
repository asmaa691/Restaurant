import React, { useState } from 'react';
import { dishes } from '../data/dishes';
import DishCard from '../components/DishCard';
import Cart from '../components/Cart';

export default function Menu() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a dish to cart
  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  // Function to remove dish from cart
  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <section className="container">
      <h2>Menu</h2>

      {/* Grid of dishes */}
      <div className="menu-grid">
        {dishes.map(d => (
          <DishCard
            key={d.id}
            dish={d}
            addToCart={() => addToCart(d)}
          />
        ))}
      </div>

      {/* Cart */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </section>
  );
}


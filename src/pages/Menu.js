import React, { useState } from 'react';
import { dishes } from '../data/dishes';
import DishCard from '../components/DishCard';
import Cart from '../components/Cart';

export default function Menu() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <section className="container">
      <h2 className="red">Menu</h2>

      <div className="grid">
        {dishes.map(d => (
          <DishCard
            key={d.id}
            dish={d}
            addToCart={() => addToCart(d)}
          />
        ))}
      </div>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </section>
  );
}
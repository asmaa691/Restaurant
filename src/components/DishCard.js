import React from 'react';
import { Link } from 'react-router-dom';

export default function DishCard({ dish, addToCart }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>Price: ${dish.price}</p>

      <div className="buttons">
        <Link to={`/dish/${dish.id}`} className="button">View Details</Link>
        {addToCart && (
          <button className="button" onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}



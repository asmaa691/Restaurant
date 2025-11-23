import React from 'react';
import { useParams } from 'react-router-dom';
import { dishes } from '../data/dishes';

export default function Dish() {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) return <p className="pad">Dish not found.</p>;

  return (
    <section className="container pad">
      <h2 className="text-2xl bold mb">{dish.name}</h2>

      <img 
        src={dish.image} 
        alt={dish.name} 
        className="card-img"
      />

      <p className="mb">Price: ${dish.price}</p>
      <p className="brown">{dish.description}</p>
    </section>
  );
}
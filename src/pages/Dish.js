import React from 'react';
import { useParams } from 'react-router-dom';
import { dishes } from '../data/dishes';

export default function Dish() {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) return <p className="p-4">Dish not found.</p>;

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{dish.name}</h2>

      <img 
        src={dish.image} 
        alt={dish.name} 
        className="w-full max-w-md rounded mb-4"
      />

      <p className="mb-2">Price: ${dish.price}</p>
      <p className="text-gray-700">{dish.description}</p>
    </section>
  );
}

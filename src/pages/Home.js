import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="container mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-red-600">Welcome to FLAMES 🔥</h2>
      <p className="text-lg text-gray-700 mb-6">
        Where great taste meets fresh ingredients. Explore our menu and enjoy your favorite dishes!
      </p>

      <Link
        to="/menu"
        className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-red-700 transition"
      >
        Explore Menu
      </Link>
    </section>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">FLAMES</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/Services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </nav>
  );
}

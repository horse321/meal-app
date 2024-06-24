// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >
      <h1 className="text-6xl mb-16 text-center">Home Page</h1>
      <div className='grid text-center lg:grid-cols-1 gap-8'>
        <Link to="/menu">
          <button className="px-6 py-3 bg-blue-500 text-3xl text-white rounded-md hover:bg-blue-600">
            Menu
          </button>
        </Link>
        <Link to="/favourites">
          <button className="px-6 py-3 bg-green-500 text-3xl text-white rounded-md hover:bg-green-600">
            Favourites
          </button>
        </Link>
        <Link to="/meal-generator">
          <button className="px-6 py-3 bg-yellow-500 text-3xl  text-white rounded-md hover:bg-yellow-600">
            Random Meal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

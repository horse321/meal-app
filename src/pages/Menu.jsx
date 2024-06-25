// src/pages/MenuPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div >
      <h1 className="text-6xl mb-16 text-center">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {categories.map((category) => (
          <Link key={category.idCategory} to={`/menu/${category.strCategory}`}>
            <div className="bg-white p-4 rounded shadow hover:bg-gray-100 transition">
              <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-80 object-cover rounded-md mb-2"   />
              <h2 className="text-xl">{category.strCategory}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

// src/pages/CategoryMeals.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MealCard from '../components/MealCard';

const CategoryMeals = () => {
  const [meals, setMeals] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => setMeals(response.data.meals))
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div className="p-4">
     <h1 className="text-6xl mb-16">Meals for {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 " >
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default CategoryMeals;

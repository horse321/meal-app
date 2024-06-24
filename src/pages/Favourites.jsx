import React from 'react';
import { useSelector } from 'react-redux';
import MealCard from '../components/MealCard';

const FavouritesPage = () => {
  const favouriteMeals = useSelector((state) => state.favourites);

  return (
    <div className="favourites-page">
    <h1 className="text-6xl mb-16">My Favourite Meals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {favouriteMeals.length === 0 ? (
          <p className="text-3xl">No favourite meals yet!</p>
        ) : (
          favouriteMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;

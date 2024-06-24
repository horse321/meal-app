// src/components/MealCard.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../features/favourites/favouritesSlice';

const MealCard = ({ meal }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites.some((fav) => fav.idMeal === meal.idMeal);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(meal));
    } else {
      dispatch(addToFavourites(meal));
    }
  };

  return (
    <div className='bg-white p-4 rounded shadow border-2 border-gray-300'>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-12 object-cover rounded-md mb-2"
        style={{height:200}} // Adjusted height
      />
      <h2 className="text-xl">{meal.strMeal}</h2>
      <button
        className={`mt-2 px-4 py-2 rounded-md text-white ${isFavourite ? 'bg-red-500' : 'bg-green-500'}`}
        onClick={toggleFavourite}
      >
        {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
    </div>
  );
};

export default MealCard;

import { useEffect, useState } from 'react';
import axios from 'axios';
import MealCard from '../components/MealCard';

const MealGenerator = () => {
  const [meal, setMeal] = useState(null);

  const fetchRandomMeal = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => setMeal(response.data.meals[0]))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    
    <div className=" text-center h-32 w-96 items-center mx-96 ">
      <h1 className="text-6xl mb-16 ml-42 text-center">Random Meal Generator</h1>
      {meal && <MealCard meal={meal} />}
      <button
        className="mt-12 px-4 py-4  bg-blue-500 text-2xl text-white rounded"
        onClick={fetchRandomMeal}
      >
        Generate Another Meal
      </button>
    
    </div>
  );
};

export default MealGenerator;
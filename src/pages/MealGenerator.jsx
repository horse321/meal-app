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
    <div className=" text-center h-32 w-96 items-center">
      <h1 className="text-6xl mb-16">Random Meal Generator</h1>
      <div className=' '>
      {meal && <MealCard meal={meal} />}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={fetchRandomMeal}
      >
        Generate Another Meal
      </button>
    </div>
  );
};

export default MealGenerator;
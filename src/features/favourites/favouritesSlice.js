
import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addToFavourites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      return state.filter(meal => meal.idMeal !== action.payload.idMeal);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;

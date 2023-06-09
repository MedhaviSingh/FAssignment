// store.js
import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './reducers/nameReducer';
import ageReducer from './reducers/ageReducer';
const store = configureStore({
    reducer: {
      name: nameReducer,
      age: ageReducer,
    },
    // Add any additional options or middleware here
  });
  
export default store;

import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

const store: any = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;

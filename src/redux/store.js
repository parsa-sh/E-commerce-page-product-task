import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from './reviewSlice'

const store = configureStore({
  reducer: {
    reviews : reviewReducer
  },
});

export default store;

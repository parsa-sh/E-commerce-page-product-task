import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  reviews: [
    {
      id: nanoid(),
      name: "Parsa Shahsavan",
      text: "very good product",
      rating: 5,
    },
    {
      id: nanoid(),
      name: "Kate Blanchet",
      text: "not good product",
      rating: 3,
    },
    { id: nanoid(), name: "Brad Pitt", text: "very bad product", rating: 1 },
  ],
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    reviewAdded: (state, action) => {
      state.reviews = [...state.reviews, action.payload];
    },
  },
});
export const { reviewAdded } = reviewSlice.actions;
export default reviewSlice.reducer;

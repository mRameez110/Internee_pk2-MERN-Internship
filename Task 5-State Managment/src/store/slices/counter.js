import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    incrementByVal: (state, actions) => {
      return state + actions.payload;
    },
  },
});

export const { increment, decrement, incrementByVal } = counterSlice.actions;
export default counterSlice.reducer;

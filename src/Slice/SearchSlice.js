import React from "react";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date_start: null,
  date_end: null,
  routeFrom: null,
  routeIn: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchHandleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    cityExchange: (state) => {
      const from = state.routeFrom;
      state.routeFrom = state.routeIn;
      state.routeIn = from;
    },
  },
});

export const { searchHandleChange, cityExchange } = searchSlice.actions;
export default searchSlice.reducer;

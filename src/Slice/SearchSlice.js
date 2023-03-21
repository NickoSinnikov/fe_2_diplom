import React from "react";

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
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

export const {searchHandleChange, cityExchange} = searchSlice.actions;
export default searchSlice.reducer;
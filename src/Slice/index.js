import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './SearchSlice';
import routeSlice from './routeSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    routes: routeSlice,
  },
});

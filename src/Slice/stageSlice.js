/* eslint-disable no-loop-func */
/* eslint-disable guard-for-in */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   stage: 1,
};

const stageSlice = createSlice({
   name: 'stage',
   initialState,
   reducers: {
      stageChange: (state, action) => {
         const { stage } = action.payload;
         state.stage = stage;
      },
   },
});

export const { stageChange } = stageSlice.actions;
export default stageSlice.reducer;
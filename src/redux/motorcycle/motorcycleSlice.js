import { createSlice } from '@reduxjs/toolkit';
import newotorcycle from './motorcyle.service';

const newmotorSlice = createSlice({
  name: 'addmotor',
  initialState: {
    newotorcycle: [],
    status: null,
  },
  extraReducers: {
    [newotorcycle.fulfilled]: (state, action) => {
      state.newotorcycle = [...state.newotorcycle, action.payload];
      state.status = 'success';
    },
    [newotorcycle.pending]: (state) => {
      state.status = 'loading';
    },
    [newotorcycle.rejected]: (state) => {
      state.newotorcycle = [];
      state.status = 'failed';
    },
  },
});

export default newmotorSlice.reducer;

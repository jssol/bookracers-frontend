import { createSlice } from '@reduxjs/toolkit';
import createCategory from './category.service';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: {},
    status: null,
  },
  extraReducers: {
    [createCategory.fulfilled]: (state, { payload }) => {
      state.category = payload;
      state.status = 'success';
    },
    [createCategory.pending]: (state) => {
      state.status = 'loading';
    },
    [createCategory.rejected]: (state) => {
      state.category = {};
      state.status = 'failed';
    },
  },
});

export default categorySlice.reducer;

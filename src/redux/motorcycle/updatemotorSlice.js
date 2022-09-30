import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  loading: false,
  motorcycle: '',
  error: '',
};

export const updatemotor = createAsyncThunk(
  'motorcycle/updatemotor',
  async (motorcycle) => {
    const response = await axios.patch(
      `${BASE_URL}api/v1/update_motorcycle`,
      motorcycle,
      {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      },
    );
    return response.data;
  },
);

const motorcycleSlice = createSlice({
  name: 'userUpdateMotor',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(updatemotor.pending, (state) => {
      state.loading = true;
      state.motorcycle = {};
      state.error = '';
    });
    builder.addCase(updatemotor.fulfilled, (state, action) => {
      state.loading = false;
      state.motorcycle = action.payload;
      state.error = '';
    });
    builder.addCase(updatemotor.rejected, (state, action) => {
      state.loading = false;
      state.motorcycle = {};
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default motorcycleSlice.reducer;

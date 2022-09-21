import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  user: {},
  error: '',
  success: false,
};

const setToken = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
};

// const getToken = () => {
//   const now = new Date(Date.now()).getTime();
//   const thirtyMinutes = 1000 * 60 * 30;
//   const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
//   if (timeSinceLastLogin < thirtyMinutes) {
//     return localStorage.getItem('token');
//   }
//   return '';
// };

// Generated pending, fulfilled and rejected action types
export const signup = createAsyncThunk('user/signup', (credentials) => axios
  .post(`${BASE_URL}signup`, {
    user: credentials,
  })
  .then((response) => {
    setToken(response.data.token);
    console.log('working');
    return response.data;
  }));

const userSlice = createSlice({
  name: 'user',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.success = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
  /* eslint-enable */
});

export default userSlice.reducer;

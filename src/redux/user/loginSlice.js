import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  user: {},
  error: '',
  authenticated: false,
};

// const setToken = (token) => {
//   localStorage.setItem('token', token);
//   localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
// };

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
export const login = createAsyncThunk('user/login', (credentials) => axios
  .post(`${BASE_URL}login`, {
    user: credentials,
  })
  .then((response) => response.data));
  // setToken(response.data.token);

const userSlice = createSlice({
  name: 'userLogin',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
      state.authenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
      state.authenticated = false;
    });
  },
  /* eslint-enable */
});

export default userSlice.reducer;

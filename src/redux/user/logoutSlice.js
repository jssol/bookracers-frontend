import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  loading: false,
  user: '',
  error: '',
  authenticated: false,
};

const remToken = (token) => {
  localStorage.removeItem('token', token);
};

const remIsAdmin = (isAdmin) => {
  localStorage.removeItem('isAdmin', isAdmin);
};

const remUser = (user) => {
  localStorage.removeItem('user', user);
};

export const logout = createAsyncThunk('user/logout', (user) => axios
  .get(`${BASE_URL}api/v1/logout`, {
    user,
  })
  .then((response) => {
    localStorage.setItem('loggedOut', true);
    remToken();
    remIsAdmin();
    remUser();
    window.location.reload();
    return response.data;
  }));

const userSlice = createSlice({
  name: 'userLogout',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
      state.authenticated = false;
    });
  },
  /* eslint-enable */
});

export default userSlice.reducer;

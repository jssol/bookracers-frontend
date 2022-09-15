import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: ({ value }) => ({
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      ...value,
      loggedIn: true,
    }),
    logout: ({ value }) => ({
      ...value,
      loggedIn: false,
    }),
    signup: ({ value }) => ({
      ...value,
      loggedIn: true,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;

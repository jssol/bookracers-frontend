import { configureStore, findNonSerializableValue } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import signupReducer from './user/signupSlice';
import loginReducer from './user/loginSlice';
import logoutReducer from './user/logoutSlice';
import motorSlice from './motorcycles/motorSlice';
import reservationSlice from './reservations/reservationSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    logout: logoutReducer,
    motor: motorSlice,
    reservation: reservationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    findNonSerializableValue,
  ).concat(logger),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import signupReducer from './user/signupSlice';
import loginReducer from './user/loginSlice';
import logoutReducer from './user/logoutSlice';
import addcatReducer from './category/addcatSlice';
import delcatReducer from './category/delcatSlice';
import addmotorReducer from './motorcycle/addmotorSlice';
import delmotorReducer from './motorcycle/delmotorSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    logout: logoutReducer,
    addcat: addcatReducer,
    delcat: delcatReducer,
    addmotor: addmotorReducer,
    delmotor: delmotorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/auth/AuthSlice'
import propertyReducers from '../features/property/propertySlice'

const store = configureStore({
  reducer: {
    property: propertyReducers,
    auth: authReducers
  },
});

export default store;

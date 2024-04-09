import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'
import profileReducer from '../slices/profileSlice';
// import cartReducer from '../slice/cartSlice';
import { CartSlice } from "../slices/cartSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  profile:profileReducer,
  cart: CartSlice.reducer,
});

export default rootReducer;

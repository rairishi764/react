import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice"
import restaurantReducer from './features/restaurantSlice'
export const store = configureStore({
  //combine all slices to make big store
    reducer: {
    basket:basketReducer,
    restaurant:restaurantReducer
  },
})
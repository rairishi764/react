import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice"

export const store = configureStore({
  //combine all slices to make big store
    reducer: {
    basket:basketReducer
  },
})
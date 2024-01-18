import { configureStore } from '@reduxjs/toolkit'
import DrawerSlice from './features/DrawerSlice'
export const store = configureStore({
  reducer: {
    drawer: DrawerSlice
  },
})
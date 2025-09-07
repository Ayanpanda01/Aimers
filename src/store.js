

import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slice.js'
export default configureStore({
  reducer: {
    counter: countReducer,
  },
})
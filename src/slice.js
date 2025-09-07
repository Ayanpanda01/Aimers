import { createSlice } from '@reduxjs/toolkit'
import { dummy } from './assets/assets'
import { testimonials } from './assets/assets'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    currency: import.meta.env.VITE_CURRENCY,
    allCourses:dummy,
    isEducator: true,
    testimonialsdata:testimonials
  },
  reducers: {
    setIsEducator: (state, action) => {
      state.isEducator = action.payload
    },
    setCurrency: (state, action) => {
      state.currency = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import courseReducer from '../features/course/courseSlice'
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
    reducer: {
        course: courseReducer,
        auth: authReducer,
    },
})
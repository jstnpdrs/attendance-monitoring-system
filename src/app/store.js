import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/data/dataSlice'
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
    reducer: {
        data: dataReducer,
        auth: authReducer,
    },
})
import { configureStore } from '@reduxjs/toolkit'
import bannerReducer from '../features/bannerSlice'
export const store = configureStore({
    reducer: {
        banner: bannerReducer,
    },
});

// Infer the type of makeStore
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
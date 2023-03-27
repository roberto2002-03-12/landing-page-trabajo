import { configureStore } from '@reduxjs/toolkit';
import { estadoSlice, authSlice } from './';

export const store = configureStore({
    reducer: {
        estado: estadoSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
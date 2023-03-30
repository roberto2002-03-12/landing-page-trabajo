import { configureStore } from '@reduxjs/toolkit';
import { estadoSlice, authSlice, mensajeSlice } from './';

export const store = configureStore({
    reducer: {
        estado: estadoSlice.reducer,
        auth: authSlice.reducer,
        mensaje: mensajeSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
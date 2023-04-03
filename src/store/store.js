import { configureStore } from '@reduxjs/toolkit';
import { estadoSlice, authSlice, mensajeSlice, reclamoSlice } from './';

export const store = configureStore({
    reducer: {
        estado: estadoSlice.reducer,
        auth: authSlice.reducer,
        mensaje: mensajeSlice.reducer,
        reclamo: reclamoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
import { configureStore } from '@reduxjs/toolkit';
import { estadoSlice, authSlice, mensajeSlice, reclamoSlice, blogSlice, categoriaSlice } from './';

export const store = configureStore({
    reducer: {
        estado: estadoSlice.reducer,
        auth: authSlice.reducer,
        mensaje: mensajeSlice.reducer,
        reclamo: reclamoSlice.reducer,
        blog: blogSlice.reducer,
        categoria: categoriaSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
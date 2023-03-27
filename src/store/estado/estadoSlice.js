import { createSlice } from '@reduxjs/toolkit';

export const estadoSlice = createSlice({
    name: 'estado',
    initialState: {
        mensajeError: undefined,
        mensajeExito: undefined,
        estado: '' //'enviado' 'no-enviado'
    },
    reducers: {
        onSubmit: (state, {payload}) => {
            state.estado = 'enviado';
            state.mensajeExito = payload;
        },
        onError: (state, {payload}) => {
            state.mensajeExito = undefined;
            state.estado = 'no-enviado';
            state.mensajeError = payload;
        },
        onChecking: (state) => {
            state.estado = 'revisando';
            state.mensajeError = undefined;
            state.mensajeExito = undefined;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});

export const {
    onSubmit,
    onError,
    clearErrorMessage,
    onChecking
} = estadoSlice.actions;

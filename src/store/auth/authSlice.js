import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estadoAuth: 'checking', //authenticated, not-authenticated
        user: {},
        mensajeErrorAuth: undefined,
        mensajeExitoAuth: undefined
    },
    reducers: {
        onCheckingAuth: (state) => {
            state.estadoAuth = 'checking';
            state.user = {};
            state.mensajeErrorAuth = undefined;
        },
        onLoggin: (state, {payload}) => {
            state.estadoAuth = 'authenticated';
            state.user = payload;
            state.mensajeErrorAuth = undefined;
        },
        onLogout: (state, {payload}) => {
            state.estadoAuth = 'not-authenticated';
            state.user = {};
            state.mensajeExitoAuth = undefined;
            state.mensajeErrorAuth = payload;
        },
        clearErrorMessageAuth: (state) => {
            state.mensajeErrorAuth = undefined;
        },
        onRegister: (state, {payload}) => {
            state.estadoAuth = 'not-authenticated',
            state.user = {};
            state.mensajeErrorAuth = undefined;
            state.mensajeExitoAuth = payload;
        }
    }
});

export const {
    onCheckingAuth,
    onLoggin,
    onLogout,
    clearErrorMessageAuth,
    onRegister
} = authSlice.actions;
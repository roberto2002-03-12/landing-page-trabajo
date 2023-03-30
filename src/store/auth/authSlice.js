import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estadoAuth: 'not-authenticated', //authenticated, not-authenticated, //checking
        estadoEmail: '', //'enviado' 'no-enviado'
        user: {},
        mensajeErrorAuth: undefined,
        mensajeExitoAuth: undefined,
        mensajeErrorEmail: undefined,
        mensajeExitoEmail: undefined
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
        onLogoutUser: (state) => {
            state.estadoAuth = 'not-authenticated';
            state.user = {};
            state.mensajeErrorAuth = undefined;
            state.mensajeExitoAuth = undefined;
        },
        clearErrorMessageAuth: (state) => {
            state.mensajeErrorAuth = undefined;
        },
        onRegister: (state, {payload}) => {
            state.estadoAuth = 'not-authenticated',
            state.user = {};
            state.mensajeErrorAuth = undefined;
            state.mensajeExitoAuth = payload;
        },
        onSubmitEmail: (state, {payload}) => {
            state.estadoEmail = 'enviado';
            state.mensajeExitoEmail = payload
        },
        onCheckingEmail: (state) => {
            state.estadoEmail = 'revisando';
            state.mensajeErrorEmail = undefined;
            state.mensajeExitoEmail = undefined;
        },
        onErrorEmail: (state, {payload}) => {
            state.mensajeExitoEmail = undefined;
            state.estadoEmail = 'no-enviado';
            state.mensajeErrorEmail = payload;
        },
        clearErrorMessageEmail: (state) => {
            state.mensajeErrorEmail = undefined;
        }
    }
});

export const {
    onCheckingAuth,
    onLoggin,
    onLogout,
    onLogoutUser,
    clearErrorMessageAuth,
    onRegister,
    onSubmitEmail,
    onCheckingEmail,
    onErrorEmail,
    clearErrorMessageEmail
} = authSlice.actions;
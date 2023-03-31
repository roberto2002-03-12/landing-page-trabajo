import { createSlice } from '@reduxjs/toolkit';

export const mensajeSlice = createSlice({
    name: 'mensaje',
    initialState: {
        isLoadingMessage: true,
        messages: [],
        paginas: 1,
        message: undefined,
        nombre_completo: '',
        fecha_creada: ''
    },
    reducers: {
        onLoadMessages: (state, { payload }) => {
            state.messages = payload;
            state.isLoadingMessage = false;
        },
        onChangePagesMessage: (state, {payload}) => {
            const paginasDisponibles = Math.ceil(payload / 20);
            state.paginas = paginasDisponibles; 
        },
        onSetActiveMessage: (state, { payload }) => {
            state.message = payload;
        },
        onDeleteActiveMessage: (state) => {
            state.message = undefined;
        },
        onResetFiltersMessage: (state) => {
            state.nombre_completo = '';
            state.fecha_creada = '';
        },
        onSetFiltersMessage: (state, { payload }) => {
            state.nombre_completo = payload.nombre_completo || '';
            state.fecha_creada = payload.fecha_creada || '';
        }
    }
});

export const {
    onLoadMessages,
    onChangePagesMessage,
    onSetActiveMessage,
    onDeleteActiveMessage,
    onResetFiltersMessage,
    onSetFiltersMessage
} = mensajeSlice.actions;
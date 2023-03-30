import { createSlice } from '@reduxjs/toolkit';

export const mensajeSlice = createSlice({
    name: 'mensaje',
    initialState: {
        isLoadingMessage: true,
        messages: [],
        paginas: 1,
        message: undefined
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
        }
    }
});

export const {
    onLoadMessages,
    onChangePagesMessage,
    onSetActiveMessage,
    onDeleteActiveMessage
} = mensajeSlice.actions;
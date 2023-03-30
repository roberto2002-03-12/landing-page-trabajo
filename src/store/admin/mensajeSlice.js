import { createSlice } from '@reduxjs/toolkit';

export const mensajeSlice = createSlice({
    name: 'mensaje',
    initialState: {
        isLoadingMessage: true,
        messages: [],
        paginas: 1,
        message: {}
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
        }
    }
});

export const {
    onLoadMessages,
    onChangePagesMessage,
    onSetActiveMessage
} = mensajeSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const reclamoSlice = createSlice({
    name: 'reclamo',
    initialState: {
        isLoadingClaim: true,
        claims: [],
        paginas: 1,
        claim: null,
        nombre_completo: '',
        fecha_creada: '',
        tipo_persona: '',
        tipo_reclamo: '',
        tipo_contratado: ''
    },
    reducers: {
        onLoadClaims: (state, { payload }) => {
            state.claims = payload;
            state.isLoadingClaim = false;
        },
        onChangePagesClaims: (state, {payload}) => {
            const paginasDisponibles = Math.ceil(payload / 20);
            state.paginas = paginasDisponibles; 
        },
        onSetActiveClaim: (state, {payload}) => {
            state.isLoadingClaim = true;
            state.claim = payload;
            state.isLoadingClaim = false;
        },
        onSetNullClaim: (state) => {
            state.claim = null;
        },
        onResetFiltersClaims: (state) => {
            state.nombre_completo = '';
            state.fecha_creada = '';
            state.tipo_persona = '';
            state.tipo_reclamo = '';
            state.tipo_contratado = '';
        },
        onSetFiltersClaims: (state, { payload }) => {
            state.nombre_completo = payload.nombre_completo || '';
            state.fecha_creada = payload.fecha_creada || '';
            state.tipo_persona = payload.tipo_persona || '';
            state.tipo_reclamo = payload.tipo_reclamo || '';
            state.tipo_contratado = payload.tipo_contratado || '';
        }
    }
});

export const {
    onLoadClaims,
    onChangePagesClaims,
    onSetActiveClaim,
    onResetFiltersClaims,
    onSetFiltersClaims,
    onSetNullClaim
} = reclamoSlice.actions;
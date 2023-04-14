import { createSlice } from '@reduxjs/toolkit';

export const categoriaSlice = createSlice({
  name: 'categoria',
  initialState: {
    isLoadingCat: true,
    catStatus: '',
    categorias: [],
    paginas: 1,
    categoria: null,
  },
  reducers: {
    onLoadCategoria: (state, {payload}) => {
      state.categorias = payload;
      state.isLoadingCat = false;
    },
    onChangePageCat: (state, {payload}) => {
      const paginasDisponibles = Math.ceil(payload / 20);
      state.paginas = paginasDisponibles;
    },
    onSetActiveCat: (state, {payload}) => {
      state.categoria = payload;
    },
    onSetNullCat: (state) => {
      state.categoria = '';
    },
    onSubmitCategoria: (state) => {
      state.catStatus = 'enviado';
    },
    onCheckingCategoria: (state) => {
      state.catStatus = 'revisando';
    },
    onErrorCategoria: (state) => {
      state.catStatus = 'no-enviado';
    }
  }
});

export const {
  onLoadCategoria,
  onChangePageCat,
  onSetActiveCat,
  onSetNullCat,
  onSubmitCategoria,
  onCheckingCategoria,
  onErrorCategoria
} = categoriaSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const categoriaSlice = createSlice({
  name: 'categoria',
  initialState: {
    isLoadingCat: true,
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
      state.isLoadingCat = true;
      state.categoria = payload;
      state.isLoadingCat = false;
    },
    onSetNullCat: (state) => {
      state.categoria = '';
    }
  }
});

export const {
  onLoadCategoria,
  onChangePageCat,
  onSetActiveCat,
  onSetNullCat
} = categoriaSlice.actions;
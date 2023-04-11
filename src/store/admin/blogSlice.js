import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
  name: 'reclamo',
  initialState: {
    isLoadingBlog: true,
    blogs: [],
    paginas: 1,
    blog: null,
    titulo_blog: '',
    categoria_blog: ''
  },
  reducers: {
    onLoadBlogs: (state, { payload }) => {
      state.blogs = payload;
      state.isLoadingBlog = false;
    },
    onChangePagesBlogs: (state, {payload}) => {
      const paginasDisponibles = Math.ceil(payload / 20);
      state.paginas = paginasDisponibles; 
    },
    onSetActiveBlog: (state, {payload}) => {
      state.isLoadingBlog = true;
      state.blog = payload;
      state.isLoadingBlog = false;
    },
    onSetNullBlog: (state) => {
      state.blog = null;
    },
    onResetFiltersBlogs: (state) => {
      state.titulo_blog = '';
      state.categoria_blog = '';
    },
    onSetFiltersBlogs: (state, { payload }) => {
      state.titulo_blog = payload.titulo_blog || '';
      state.categoria_blog = payload.categoria_blog || '';
    }
  }
});

export const {
  onLoadBlogs,
  onChangePagesBlogs,
  onSetActiveBlog,
  onResetFiltersBlogs,
  onSetFiltersBlogs,
  onSetNullBlog
} = blogSlice.actions;
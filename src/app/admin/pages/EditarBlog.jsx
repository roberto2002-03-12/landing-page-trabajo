import { useState, useMemo, useLayoutEffect } from 'react';
import { useForm, useCategoriaApi, useBlogApi } from '../../../hooks';
import { NavBar } from '../components';
import { Cargando } from '../../components';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const inputs = {
  titulo: '',
  descripcion: '',
  urlBlog: '',
  categoriaId: ''
};

const inputsValidation = {
  titulo: [(value) => value.length >= 6, 'Debe tener por lo menos 6 caracteres'],
  descripcion: [(value) => value.length >= 100 && value.length < 1000, 'Debe tener por lo menos 100 caracteres o ser menor a 1000 caracteres'],
  urlBlog: [(value) => value.includes('https'), 'Debe ser una url valida'],
};

const style = {
  mb: 2, 
  width: '90%'
};

export const EditarBlog = () => {
  //react redux
  const { statusSubmitBlog, mensajeErrorBlog, mensajeExitoBlog, blog } = useSelector(state => state.blog);
  //Hooks apis
  const { subirBlog } = useBlogApi();
  const { categorias, listarCategorias } = useCategoriaApi();
  //Hook form
  const { titulo, descripcion, urlBlog, categoriaId,
    tituloValid, descripcionValid, urlBlogValid,
    formState, onInputChange, onResetForm, isFormValid } = useForm(inputs, inputsValidation);
  //Hook normales
  const [selectedFile, setSelectedFile] = useState([]);
  const [formSubmited, setFormSubmited] = useState(false);

  //solo listar por primera vez
  useMemo(() => {
    listarCategorias();
  }, []);

  //esto es para mensajeria
  useLayoutEffect(() => {
    if (mensajeErrorBlog !== undefined) Swal.fire('Error al enviar el blog', mensajeErrorBlog, 'error');
  }, [mensajeErrorBlog]);

  useLayoutEffect(() => {
    if (mensajeExitoBlog !== undefined) Swal.fire('Exito al publicar el blog', mensajeExitoBlog, 'success');
  }, [mensajeExitoBlog]);
  
  //esto para las imagenes
  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmitBlog = (event) => {
    event.preventDefault();

    setFormSubmited(true);

    if (!isFormValid) return;

    subirBlog(formState, selectedFile);
    setSelectedFile([]);
    setFormSubmited(false);
  };

  return (
    <div>EditarBlog</div>
  );
};

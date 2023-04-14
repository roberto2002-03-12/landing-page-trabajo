import { Route, Routes } from 'react-router-dom';
import { LoginRegisterPage, RecuperarContrasena } from '../auth/pages/';
import { LandingPage, FormularioPage } from '../app/landing/';
import { ListaBlogs, ListaReclamos, ListaMensajes, VerReclamo, VerBlog, CrearBlog, EditarBlog, ListaCategoria } from '../app/admin/pages';
import { BlogSeccion } from '../app/blog/pages';
import { Box, CircularProgress } from '@mui/material';
import { useAuthApi } from '../hooks';

export const AppRouter = () => {
    const stateAuth = localStorage.getItem('stateAuth') || 'not-authenticated';
    const { estadoAuth } = useAuthApi();

    if (estadoAuth === 'checking') {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                <CircularProgress/>
            </Box>
        )
    };

    return (
        <Routes>
            {
                (estadoAuth === 'not-authenticated' && stateAuth === 'not-authenticated' ? (
                    <>
                        <Route path='/recuperacion' element={ <RecuperarContrasena /> } />
                        <Route path='/login' element={ <LoginRegisterPage /> }/>
                        <Route path='/' element={ <LandingPage/> } />
                        <Route path='/*' element={ <LandingPage/> } />
                        <Route path='/reclamacion' element={ <FormularioPage /> } />
                        <Route path='/blog' element={ <BlogSeccion/> } />
                    </>
                ) : (
                    <>
                        <Route path='/admin/lista-mensajes' element={ <ListaMensajes /> } />
                        <Route path='/admin/lista-reclamos' element={ <ListaReclamos /> }/>
                        <Route path='/admin/reclamo/:id' element={ <VerReclamo /> } />
                        <Route path='/admin/lista-blogs' element={ <ListaBlogs/> } />
                        <Route path='/admin/blog/:id' element={<VerBlog />} />
                        <Route path='/admin/crear-blog' element={<CrearBlog />} />
                        <Route path='/admin/editar-blog/:id' element={<EditarBlog />} />
                        <Route path='/admin/lista-categorias' element={ <ListaCategoria /> } />
                    </>
                ))
            }
            <Route path='/*' element={ <LandingPage /> } />
            <Route path='/login' element={ <LoginRegisterPage /> } />
            <Route path='/blog' element={ <BlogSeccion/> } />
        </Routes>
    );
};

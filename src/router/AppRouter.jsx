import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginRegisterPage, RecuperarContrasena } from '../auth/pages/';
import { LandingPage, FormularioPage } from '../app/landing/';
import { ListaBlogs, ListaReclamos, ListaMensajes, VerReclamo } from '../app/admin/pages';
import { BlogPestana, BlogSeccion } from '../app/blog/pages';
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
                        <Route path='/blog/:id' element={ <BlogPestana/> }/>
                    </>
                ) : (
                    <>
                        <Route path='/admin/lista-mensajes' element={ <ListaMensajes /> } />
                        <Route path='/admin/lista-reclamos' element={ <ListaReclamos /> }/>
                        <Route path='/admin/reclamo/:id' element={ <VerReclamo /> } />
                        <Route path='/admin/lista-blogs' element={ <ListaBlogs/> } />
                    </>
                ))
            }
            <Route path='/*' element={ <LandingPage /> } />
            <Route path='/login' element={ <LoginRegisterPage /> } />
            <Route path='/blog' element={ <BlogSeccion/> } />
            <Route path='/blog/:id' element={ <BlogPestana/> }/>
        </Routes>
    );
};

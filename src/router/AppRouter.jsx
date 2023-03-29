import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginRegisterPage, RecuperarContrasena } from '../auth/pages/';
import { LandingPage, FormularioPage } from '../app/landing/';
import { CrearBlog, EditarBlog, ListaBlogs, ListaFormularios, ListaMensajes, VerFormulario } from '../app/admin/pages';
import { Box, CircularProgress } from '@mui/material';
import { useAuthApi } from '../hooks';

export const AppRouter = () => {
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
                (estadoAuth === 'not-authenticated' ? (
                    <>
                        <Route path='/recuperacion' element={ <RecuperarContrasena /> } />
                        <Route path='/login' element={ <LoginRegisterPage /> }/>
                        <Route path='/' element={ <LandingPage/> } />
                        <Route path='/*' element={ <LandingPage/> } />
                        <Route path='/reclamacion' element={ <FormularioPage /> } />
                    </>
                ) : (
                    <>
                        <Route path='/admin/lista-mensajes' element={ <ListaMensajes /> } />
                        <Route path='/admin/lista-reclamos' element={ <ListaFormularios /> }/>
                        <Route path='/admin/lista-blogs' element={ <ListaBlogs/> } />
                    </>
                ))
            }
        </Routes>
    );
};

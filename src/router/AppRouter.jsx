import { LandingPage, FormularioPage } from '../app/landing/';
import { Route, Routes, Navigate } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Routes>
            <>
                <Route path='/' element={ <LandingPage/> } />
                <Route path='/*' element={ <LandingPage/> } />
                <Route path='/reclamacion' element={ <FormularioPage /> } />
            </>
        </Routes>
    );
};

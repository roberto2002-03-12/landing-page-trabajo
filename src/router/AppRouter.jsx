import { LandingPage } from '../app/landing/LandingPage';
import { Route, Routes, Navigate } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Routes>
            <>
                <Route path='/' element={ <LandingPage/> } />
                <Route path='/*' element={ <LandingPage/> } />
            </>
        </Routes>
    );
};

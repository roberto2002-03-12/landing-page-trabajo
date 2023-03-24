import { distritos } from '../data';

export const mostrarDistritosPorProvincia = (provinciaId) => {
    const distritosFiltrados = distritos.filter(
        (distrito) => distrito.province_id === provinciaId
    );

    return distritosFiltrados;
};
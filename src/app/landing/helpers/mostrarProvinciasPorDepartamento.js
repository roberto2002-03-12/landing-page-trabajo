import { provincias } from '../data';

export const mostrarProvinciasPorDepartamento = (departamentoId) => {
    const provinciasFiltradas = provincias.filter(
        (provincia) => provincia.department_id === departamentoId
    );

    return provinciasFiltradas;
};
import landingPageApi from '../../api/landingPage';

export const useFormularioApi = () => {
    const subirFormularioReclamo = async (formulario, documento) => {
        let newFormulario = {
            ...formulario
        };
        const departamento = newFormulario.departamento.split('-');
        const provincia = newFormulario.provincia.split('-');

        try {
            const formData = new FormData();
            formData.append('nombreCompleto', newFormulario.nombreCompleto);
            formData.append('tipoPersona', newFormulario.tipoPersona);
            formData.append('razonSocial', newFormulario.razonSocial);
            formData.append('domicilio', newFormulario.domicilio);
            formData.append('departamento', departamento);
            formData.append('provincia', provincia);
            formData.append('distrito', newFormulario.distrito);
            formData.append('docIdentidad', newFormulario.docIdentidad);
            formData.append('nroDocumento', newFormulario.nroDocumento);
            formData.append('telefono', newFormulario.telefono);
            formData.append('email', newFormulario.email);
            formData.append('tipoReclamo', newFormulario.tipoReclamo);
            formData.append('bienContratado', newFormulario.bienContratado);
            formData.append('archivo_pdf', documento);
            formData.append('detalleDelProducto', newFormulario.detalleDelProducto);
            formData.append('detalleDelReclamo', newFormulario.detalleDelReclamo);
            formData.append('autorizoActo', newFormulario.autorizoActo);

            await landingPageApi.post('/formulario-reclamo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            
        } catch (err) {
            console.error(err);
        }
    };
};
import { useEffect, useState } from 'react';
import { useMessageApi } from '../../../hooks';
import { Modal, Box, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const TablaMensaje = () => {
    const { listarMensajes, messages } = useMessageApi();

    useEffect(() => {
        listarMensajes();
    }, []);
    
    const [modalState, setModalState] = useState(false);
    const openModal = () => setModalState(true);
    const closeModal = () => setModalState(false);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nombre cliente</th>
                <th scope='col'>Nro Celular</th>
                <th scope='col'>Fecha registro</th>
                <th scope='col'>Acción</th>
                </tr>
            </thead>
            <tbody>
            {
                messages.map((message) => (
                    <tr key={message.idmensaje}>
                    <td>{ message.idmensaje }</td>
                    <td>{ message.nombreCompleto }</td>
                    <td>{ message.numeroCelular }</td>
                    <td>{ message.createdAt }</td>
                    <td>
                        <div className="dropdown">
                        <button className="btn btn-outline-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Acciones
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                            <a className="dropdown-item link-dropdown" onClick={ openModal }>Ver mensaje</a>
                            </li>
                            <li>
                            <a className="dropdown-item link-dropdown" href={`https://wa.me/${message.numeroCelular}`} target="_blank">Enviar mensaje</a>
                            </li>
                        </ul>
                        </div>
                        <Modal
                            keepMounted
                            open={ modalState }
                            onClose={ closeModal }
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <Box sx={ style }>
                                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                    Mensaje de {message.nombreCompleto}
                                </Typography>
                                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                    { message.mensaje }
                                </Typography>
                            </Box>
                        </Modal>
                    </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

import { useEffect, useState, useMemo, memo } from 'react';
import { useMessageApi } from '../../../hooks';
import { Modal, Box, Typography } from '@mui/material';
import { ListaMensaje } from './';

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

export const TablaMensaje = memo(() => {
    console.log('deberia renderizarme una vez')
    const { listarMensajes, messages } = useMessageApi();

    useMemo(() => {
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
                messages.map((msg) => (
                    <ListaMensaje props={ msg } key={msg.idmensaje}/>
                ))
            }
            {
                /*
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
                */
            }
            </tbody>
        </table>
    )
});

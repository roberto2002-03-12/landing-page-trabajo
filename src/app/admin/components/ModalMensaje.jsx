import { useState, useEffect, memo } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { useMessageApi } from '../../../hooks';

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

export const ModalMensaje = memo(() => {
  const { message } = useMessageApi();

  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  useEffect(() => {
    if (message !== undefined) openModal();
  }, [message]);

  return (
    <Modal
      keepMounted
      open={ modalState }
      onClose={ closeModal }
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Mensaje de {message?.nombreCompleto}
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          {message?.mensaje}
        </Typography>
      </Box>
    </Modal>
  )
});

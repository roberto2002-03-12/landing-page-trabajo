import React from 'react';
import { useForm, useMessageApi } from '../../../hooks';
import { TextField, Button } from '@mui/material';

const inputs = {
    nombre_completo: '',
    fecha_creada: ''
};

export const FiltrosMensaje = () => {
    const {
        nombre_completo,
        fecha_creada,
        onInputChange,
        formState
    } = useForm(inputs);

    const onSearchMessages = (event) => {
        event.preventDefault();
    
        if (!nombre_completo && !fecha_creada) return;
    
        console.log(formState);
    };

    return (
        <>
            <h5 className='text-center lista-mensajes-filtros-h5'>Filtros</h5>
            <div className="filtros-mensajes">
                <form onSubmit={ onSearchMessages }>
                    <TextField
                        variant='outlined'
                        label='Nombre de la persona'
                        focused
                        size='small'
                        sx={{
                            marginLeft: '15px',
                            marginRight: '15px'
                        }}
                        onChange={ onInputChange }
                        name='nombre_completo'
                        value={ nombre_completo }
                    />
                    <TextField
                        variant='outlined'
                        type='date'
                        label='Fecha'
                        focused
                        size='small'
                        sx={{
                            marginLeft: '15px',
                            marginRight: '15px'
                        }}
                        onChange={ onInputChange }
                        name='fecha_creada'
                        value={ fecha_creada }
                    />
                    <Button
                        variant='outlined'
                        type='submit'
                        size='large'
                        sx={{
                            marginLeft: '15px',
                            marginRight: '15px'
                        }}
                    >
                        Buscar
                    </Button>
                </form>
            </div>
        </>
    )
}

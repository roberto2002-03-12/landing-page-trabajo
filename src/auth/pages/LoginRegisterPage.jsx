import { useState, useEffect } from 'react';
import { useForm, useAuthApi } from '../../hooks';
import Swal from 'sweetalert2'
import { TextField, Button } from '@mui/material';
import { MDBTabs, MDBTabsItem, MDBTabsLink, 
         MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import '../styles/authStyle.css';
import { Link } from 'react-router-dom';

//inputs
const inputsRegister = {
    emailReg: '',
    passwordReg: '',
    passwordConfirm: '',
    userClave: ''
};

const inputsLogin = { 
    emailLog: '', 
    passwordLog: '' 
};

const inputsRegValidation = {
    emailReg: [(value) => value.includes('@'), 'Email invalido'],
    passwordReg: [(value) => value.length >= 8, 'La contraseña debe contener 8 caracteres como minimo'],
    passwordConfirm: [(value) => value.length >= 8, 'Contraseña invalida'],
    userClave: [(value) => value.length >= 4, 'Código debe contener por lo menos 4 caracteres']
};


const inputsLogValidation = {
    emailLog: [(value) => value.includes('@'), 'Email invalido'],
    passwordLog: [(value) => value.length >= 8, 'La contraseña debe contener 8 caracteres como minimo'],
};


//estilos
const inputsStyle = {
    width: '90%',
    margin: '15px',
    textAlign: 'center'
};

export const LoginRegisterPage = () => {
    //para login
    const { mensajeErrorAuth, mensajeExitoAuth, estadoAuth,
            user, loguearse, registrarse } = useAuthApi();

    const [formSubmited, setFormSubmited] = useState(false);
    //inputs reg
    const {
        emailReg, passwordReg, passwordConfirm, userClave,

        emailRegValid, passwordRegValid, passwordConfirmValid, userClaveValid,

        onInputChange: onInputRegChange,
        onResetForm: onResetRegForm,

        isFormValid: isRegFormValid,
        formState: regFormState
    } = useForm(inputsRegister, inputsRegValidation);

    //inputs log
    const {
        emailLog, passwordLog,

        emailLogValid, passwordLogValid,

        onInputChange: onInputLogChange,
        onResetForm: onResetLogForm,

        isFormValid: isLogFormValid,
        formState: logFormState
    } = useForm(inputsLogin, inputsLogValidation);

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) return;

        setJustifyActive(value);
        setFormSubmited(false);
    };

    //mandar datos
    const onRegisterSubmit = (event) => {
        event.preventDefault();

        if (passwordReg !== passwordConfirm) {
            Swal.fire('Las contraseñas no son iguales', 'Por favor vuelva a escribir las contraseñas', 'error');
            return;
        };

        setFormSubmited(true);

        if (!isRegFormValid) return;

        registrarse(regFormState);
        setFormSubmited(false);
        onResetRegForm();
    };

    const onLoginSubmit = (event) => {
        event.preventDefault();

        setFormSubmited(true);

        if (!isLogFormValid) return;
        //toDo start login
        loguearse(logFormState);
        setFormSubmited(false);
        onResetLogForm();
    };

    //mensaje de error y registro
    useEffect(() => {
        if (mensajeErrorAuth !== undefined) {
            Swal.fire('Error en loguin', mensajeErrorAuth, 'error');
        }
    }, [mensajeErrorAuth]);

    useEffect(() => {
        if (mensajeExitoAuth !== undefined) {
            Swal.fire('Registro exitoso', 'Ahora ya puedes iniciar sesión', 'success');
        }
    }, [mensajeExitoAuth]);

    return (
        <div className={`container-auth-dada`}>

        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                Inciar sesión
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Registrarse
            </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
            {/*
                form onSubmit={ onLoginSubmit }
                div className='text-center'
            */}
            <MDBTabsPane show={justifyActive === 'tab1'}>
                <div className='text-center'>
                    <form onSubmit={ onLoginSubmit }>
                        <TextField
                            type='email'
                            variant='outlined'
                            label='Email'
                            required
                            size='small'
                            style={inputsStyle}
                            autoComplete='username'
                            name='emailLog'
                            value={ emailLog }
                            onChange={ onInputLogChange }
                            error={ !!emailLogValid && formSubmited }
                            helperText={ !!emailLogValid && formSubmited ? emailLogValid : '' }
                        />

                        <TextField
                            type='password'
                            variant='outlined'
                            label='Contraseña'
                            required
                            size='small'
                            style={inputsStyle}
                            autoComplete='current-password'
                            name='passwordLog'
                            value={ passwordLog }
                            onChange={ onInputLogChange }
                            error={ !!passwordLogValid && formSubmited }
                            helperText={ !!passwordLogValid && formSubmited ? passwordLogValid : '' }
                        />

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <Link to='/recuperacion'>¿Te olvidaste la contraseña?</Link>
                        </div>
                        <Button
                            variant='contained'
                            sx={{width: '100%'}}
                            type='submit'
                        >
                            Iniciar sesión
                        </Button>
                    </form>
                </div>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>
                <div className='text-center'>
                    <form onSubmit={ onRegisterSubmit }>
                        <TextField
                            type='email'
                            variant='outlined'
                            label='Email'
                            required
                            size='small'
                            style={inputsStyle}
                            autoComplete='username'
                            name='emailReg'
                            value={ emailReg }
                            onChange={ onInputRegChange }
                            error={ !!emailRegValid && formSubmited }
                            helperText={ !!emailRegValid && formSubmited ? emailRegValid : '' }
                        />

                        <TextField
                            type='password'
                            variant='outlined'
                            label='Contraseña'
                            required
                            size='small'
                            style={inputsStyle}
                            autoComplete='new-password'
                            name='passwordReg'
                            value={ passwordReg }
                            onChange={ onInputRegChange }
                            error={ !!passwordRegValid && formSubmited }
                            helperText={ !!passwordRegValid && formSubmited ? passwordRegValid : '' }
                        />

                        <TextField 
                            type='password'
                            variant='outlined'
                            label='Repetir contraseña'
                            required
                            size='small'
                            style={inputsStyle}
                            autoComplete='new-password'
                            name='passwordConfirm'
                            value={ passwordConfirm }
                            onChange={ onInputRegChange }
                            error={ !!passwordConfirmValid && formSubmited }
                            helperText={ !!passwordConfirmValid && formSubmited ? passwordConfirmValid : '' }
                        />

                        <TextField 
                            type='password'
                            variant='outlined'
                            label='Código de acceso'
                            required
                            size='small'
                            style={inputsStyle}
                            name='userClave'
                            value={ userClave }
                            onChange={ onInputRegChange }
                            error={ !!userClaveValid && formSubmited }
                            helperText={ !!userClaveValid && formSubmited ? userClaveValid : '' }
                        />
                        {/*
                            <MDBBtn className="mb-4 mt-4 w-100" type='submit'>Registrarse</MDBBtn>
                        */}
                        <Button
                            variant='contained'
                            sx={{
                                width: '100%',
                                marginTop: '20px'
                            }}
                            type='submit'
                        >
                            Registrarse
                        </Button>
                    </form>
                </div>
            </MDBTabsPane>

        </MDBTabsContent>

        </div>
    );
};
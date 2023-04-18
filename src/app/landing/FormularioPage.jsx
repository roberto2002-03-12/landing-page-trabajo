import { useState, useEffect, useRef } from 'react';
import { useForm, useFormularioApi } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { mostrarProvinciasPorDepartamento, mostrarDistritosPorProvincia } from './helpers';
import { departamentos } from './data';
import ReCAPTCHA from 'react-google-recaptcha';
import { TextField, InputLabel, Select, 
         MenuItem, createTheme, FormControl, 
         Button, Box, Checkbox, CircularProgress } from '@mui/material';
import Swal from 'sweetalert2'; 
import './styles/FormularioStyle.css';

const inputs = {
    tipoPersona: '',
    nombreCompleto: '',
    razonSocial: '',
    domicilio: '',
    departamento: '',
    distrito: '',
    provincia: '',
    docIdentidad: '',
    nroDocumento: '',
    telefono: '',
    email: '',

    //manifesto del consumidor
    //documento
    tipoReclamo: '',
    bienContratado: '',
    detalleDelProducto: '',
    detalleDelReclamo: '',
    autorizoActo: 0
};

const inputsValidacion = {
    nombreCompleto: [(value) => value.length >= 8, 'Debe ser nombre completo'],
    razonSocial: [(value) => value.length >= 4, 'Razon social no valida'],
    domicilio: [(value) => value.length >= 8, 'Tiene que haber más detalle en la dirección'],
    nroDocumento: [(value) => value.length >= 8, 'Nro documento no valido'],
    telefono: [(value) => value.length >= 7, 'Número de celular no valido'],
    email: [(value) => value.includes('@'), 'Email no valido'],

    //manifesto del consumidor
    detalleDelProducto: [(value) => value.length >= 20, 'Tiene que dar más detalle'],
    detalleDelReclamo: [(value) => value.length >= 20, 'Tiene que dar más detalle'],
}

export const FormularioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    //datos para recaptcha
    const [captchaToken, setCaptchaToken] = useState('');

    const recaptchaRef = useRef(null);

    useEffect(() => {
        recaptchaRef.current.reset();
    }, []);

    const onChangeCaptcha = (token) => {
        setCaptchaToken(token);
    };

    const navigate = useNavigate();
    const { subirFormularioReclamo, mensajeError, mensajeExito, estado } = useFormularioApi();

    useEffect(() => {
        if (mensajeError !== undefined) Swal.fire('Error al enviar formulario', mensajeError, 'error');
    }, [mensajeError])

    useEffect(() => {
        if (mensajeExito !== undefined) Swal.fire('Se enviaron los datos exitosamente', mensajeExito, 'success');
    }, [mensajeExito])

    const {  
        tipoPersona,
        nombreCompleto,
        razonSocial,
        domicilio,
        departamento,
        distrito,
        provincia,
        docIdentidad,
        nroDocumento,
        telefono,
        email,
        tipoReclamo,
        bienContratado,
        detalleDelProducto,
        detalleDelReclamo,
        autorizoActo,

        nombreCompletoValid,
        razonSocialValid,
        domicilioValid,
        nroDocumentoValid,
        telefonoValid,
        emailValid,
        detalleDelProductoValid,
        detalleDelReclamoValid,

        onInputChange,
        isFormValid,
        formState,
        onResetForm
    } = useForm(inputs, inputsValidacion);

    const [formSubmited, setFormSubmited] = useState(false);

    //cambiar documento
    const [ selectedFile, setSelectedFile ] = useState([]);
    
    const handlePdfChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const onSubmitReclamo = (event) => {
        //prevenir que se refresque la página
        event.preventDefault();

        if (!captchaToken) {
            Swal.fire('Error al enviar mensaje', 'No has verificado que seas humano', 'error');
            return;
        } 

        setFormSubmited(true);

        if (!isFormValid) return;

        subirFormularioReclamo(formState, selectedFile, captchaToken)

        onResetForm();

        setSelectedFile([]);
        setFormSubmited(false);
    };

    //ubigeo
    const [ubigeoListaProvincia, setubigeoListaProvincia] = useState([]);
    const [ubigeoListaDistrito, setUbigeoListaDistrito] = useState([]);

    useEffect(() => {
        const departamentoData = departamento.split('-');
        const provinciasFiltradas = mostrarProvinciasPorDepartamento(departamentoData[0]);
        setubigeoListaProvincia(provinciasFiltradas);
    }, [departamento]);

    useEffect(() => {
        const provinciaData = provincia.split('-');
        const distritosFiltrados = mostrarDistritosPorProvincia(provinciaData[0]);
        setUbigeoListaDistrito(distritosFiltrados);
    }, [provincia]);

    //mandar a inicio
    const onCancelForm = () => {
        onResetForm();

        navigate('/');
    };

    return (
        <>
            <nav className="navbar bg-body-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Libro de reclamaciones</span>
                </div>
            </nav>

            <div className="container">
                {
                    (estado === 'revisando' ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                            <CircularProgress/>
                        </Box>
                    ) : (
                    <form onSubmit={ onSubmitReclamo }>
                        <div className="row datos-consumidor">
                            <h5>IDENTIFICADOR DEL CONSUMIDOR RECLAMANTE</h5>
                            <hr />
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="formulario-fields-1">
                                    <p>Persona natural o juridica</p>
                                    <p>Nombre y Apellido</p>
                                    <p>Razon social</p>
                                    <p>Domicilio</p>
                                    <p>Departamento</p>
                                    <p>Provincia</p>
                                    <p>Distrito</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="formulario-inputs-1">
                                    <FormControl variant="filled" sx={{ m: 1, width: 200 }} size="small">
                                        <InputLabel required id="tipo-persona-input">Tipo de persona</InputLabel>
                                        <Select
                                            labelId="tipo-persona-input"
                                            id="tipo-persona-input"
                                            defaultValue={'Persona natural'}
                                            name="tipoPersona"
                                            value={ tipoPersona }
                                            onChange={ onInputChange }
                                        >
                                            <MenuItem value={'Persona Natural'}>Persona Natural</MenuItem>
                                            <MenuItem value={'Persona Juridica'}>Persona Juridica</MenuItem>
                                        </Select>
                                    </FormControl>
    
                                    <TextField
                                        required
                                        label="Nombre y apellidos"
                                        variant="filled"
                                        size="small"
                                        name="nombreCompleto"
                                        value={ nombreCompleto }
                                        onChange={ onInputChange }
                                        error={ !!nombreCompletoValid && formSubmited }
                                        helperText={ !!nombreCompletoValid && formSubmited ? nombreCompletoValid : '' }
                                        sx={{
                                            width: 200,
                                            m: 1
                                        }}
                                    />
    
                                    <TextField
                                        required
                                        label="Razón social"
                                        variant="filled"
                                        size="small"
                                        name="razonSocial"
                                        value={ razonSocial }
                                        onChange={ onInputChange }
                                        error={ !!razonSocialValid && formSubmited }
                                        helperText={ !!razonSocialValid && formSubmited ? razonSocialValid : '' }
                                        sx={{
                                            width: 200,
                                            m: 1
                                        }}
                                    />
    
                                    <TextField
                                        required
                                        label="Domicilio"
                                        variant="filled"
                                        size="small"
                                        name="domicilio"
                                        value={ domicilio }
                                        onChange={ onInputChange }
                                        error={ !!domicilioValid && formSubmited }
                                        helperText={ !!domicilioValid && formSubmited ? domicilioValid : '' }
                                        sx={{
                                            width: 200,
                                            m: 1
                                        }}
                                    />
    
                                    <FormControl variant="filled" sx={{ m: 1, width: 200 }} size="small">
                                        <InputLabel required id="departamento-input">Departamento</InputLabel>
                                        <Select
                                            labelId="departamento-input"
                                            id="departamento-input"
                                            defaultValue={'Lima'}
                                            name="departamento"
                                            value={ departamento }
                                            onChange={ onInputChange }
                                        >
                                            {
                                                departamentos.map((dep) => (
                                                    <MenuItem key={dep.id} value={`${dep.id}-${dep.name}`}>
                                                        {dep.name}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
    
                                    <FormControl variant="filled" sx={{ m: 1, width: 200 }} size="small">
                                        <InputLabel required id="provincia-input">Provincia</InputLabel>
                                        <Select
                                            labelId="provincia-input"
                                            id="provincia-input"
                                            defaultValue={''}
                                            name="provincia"
                                            value={ provincia }
                                            onChange={ onInputChange }
                                        >
                                            {                                     
                                                ubigeoListaProvincia.map((prov) => (
                                                    <MenuItem key={prov.id} value={`${prov.id}-${prov.name}`}>
                                                        {prov.name}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
    
                                    <FormControl variant="filled" sx={{ m: 1, width: 200 }} size="small">
                                        <InputLabel required id="distrito-input">Distrito</InputLabel>
                                        <Select
                                            labelId="distrito-input"
                                            id="distrito-input"
                                            defaultValue={'Santiago de Surco'}
                                            name="distrito"
                                            value={ distrito }
                                            onChange={ onInputChange }
                                        >
                                            {
                                                ubigeoListaDistrito.map((distrito) => (
                                                    <MenuItem key={distrito.id} value={distrito.name}>
                                                        {distrito.name}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="formulario-fields-2">
                                    <p>Doc. Identidad</p>
                                    <p>N. Documentos</p>
                                    <p>Télefono</p>
                                    <p>Email</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="formulario-inputs-1">
                                    <FormControl variant="filled" sx={{ m: 1, width: 200 }} size="small">
                                        <InputLabel required id="tipo-documento-input">Tipo documento</InputLabel>
                                        <Select
                                            labelId="tipo-documento-input"
                                            id="tipo-documento-input"
                                            defaultValue={'dni'}
                                            name="docIdentidad"
                                            value={ docIdentidad }
                                            onChange={ onInputChange }
                                        >
                                            <MenuItem value={'dni'}>DNI</MenuItem>
                                            <MenuItem value={'ruc'}>RUC</MenuItem>
                                        </Select>
                                    </FormControl>
    
                                    <TextField
                                        required
                                        type='number'
                                        label="Número identidad"
                                        variant="filled"
                                        size="small"
                                        name="nroDocumento"
                                        value={ nroDocumento }
                                        onChange={ onInputChange }
                                        error={ !!nroDocumentoValid && formSubmited }
                                        helperText={ !!nroDocumentoValid && formSubmited ? nroDocumentoValid : '' }
                                        sx={{
                                            width: 200,
                                            m: 1
                                        }}
                                        onInput={({target}) => {
                                            target.value = target.value.slice(0, 11)
                                        }}
                                    />
    
                                    <TextField
                                        required
                                        type='number'
                                        label="Télefono"
                                        variant="filled"
                                        size="small"
                                        name="telefono"
                                        value={ telefono }
                                        onChange={ onInputChange }
                                        error={ !!telefonoValid && formSubmited }
                                        helperText={ !!telefonoValid && formSubmited ? telefonoValid : '' }
                                        sx={{
                                            width: 200,
                                            m: 1
                                        }}
                                        onInput={({target}) => {
                                            target.value = target.value.slice(0, 9)
                                        }}
                                    />
    
                                    <TextField
                                        required
                                        label="Email"
                                        variant="filled"
                                        size="small"
                                        name="email"
                                        value={ email }
                                        onChange={ onInputChange }
                                        error={ !!emailValid && formSubmited }
                                        helperText={ !!emailValid && formSubmited ? emailValid : '' }
                                        sx={{
                                            width: 200,
                                            m: 1
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
    
                        <div className="row manifiesto-consumidor mt-5">
                            <h5>MANIFIESTO DEL CONSUMIDOR RECLAMANTE</h5>
                            <hr />
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <p className='field-input-manifesto-consumidor'>Tipo</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <FormControl variant="filled" sx={{ m: 1, width: 200 }} size="small">
                                    <InputLabel required id="tipo-input">Queja</InputLabel>
                                    <Select
                                        labelId="tipo-input"
                                        id="tipo-input"
                                        defaultValue={'Queja'}
                                        name="tipoReclamo"
                                        value={ tipoReclamo }
                                        onChange={ onInputChange }
                                    >
                                        <MenuItem value={'Queja'}>Queja</MenuItem>
                                        <MenuItem value={'Reclamo'}>Reclamo</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <p className='field-input-manifesto-consumidor'>Bien Contratado</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <FormControl variant="filled" sx={{ m: 1, width: 200 }} size="small">
                                    <InputLabel required id="bien-contratado-input">Bien Contratado</InputLabel>
                                    <Select
                                        labelId="bien-contratado-input"
                                        id="bien-contratado-input"
                                        defaultValue={'Producto'}
                                        name="bienContratado"
                                        value={ bienContratado }
                                        onChange={ onInputChange }
                                    >
                                        <MenuItem value={'Producto'}>Producto</MenuItem>
                                        <MenuItem value={'Servicio'}>Servicio</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mt-4">
                                <p>Archivo PDF</p>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6 mt-4">
                                <input className="form-control form-control-sm" id="pdfInput" required type="file"
                                    accept="application/pdf" onChange={ handlePdfChange }
                                />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <p>Detalle del producto o Servicio</p>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                                <TextField
                                    required
                                    label="Detalle del producto"
                                    variant="outlined"
                                    size="small"
                                    name="detalleDelProducto"
                                    value={ detalleDelProducto }
                                    onChange={ onInputChange }
                                    error={ !!detalleDelProductoValid && formSubmited }
                                    helperText={ !!detalleDelProductoValid && formSubmited ? detalleDelProductoValid : '' }
                                    multiline
                                    rows={4}
                                    sx={{
                                        width: 200,
                                        m: 1
                                    }}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <p>Detalle del Reclamo o Queja</p>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                                <TextField
                                    required
                                    label="Detalle del reclamo"
                                    variant="outlined"
                                    size="small"
                                    name="detalleDelReclamo"
                                    value={ detalleDelReclamo }
                                    onChange={ onInputChange }
                                    error={ !!detalleDelReclamoValid && formSubmited }
                                    helperText={ !!detalleDelReclamoValid && formSubmited ? detalleDelReclamoValid : '' }
                                    multiline
                                    rows={4}
                                    sx={{
                                        width: 200,
                                        m: 1
                                    }}
                                />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                Autorizo el acto
                                <Checkbox
                                    checked={ autorizoActo === 1 }
                                    value={ autorizoActo }
                                    onChange={ onInputChange }
                                    name="autorizoActo"
                                />
                            </div>
                            <div className="col-xl-12">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={'6LfvmJYlAAAAAEgjsONXL6v4t_-e1XDfCgtlm9ji'}
                                    onChange={onChangeCaptcha}
                                    style={{paddingTop: '14px', paddingLeft:'26px', height: '95px'}}
                                />
                            </div>
                        </div>
                        <div className="buttons-formulario">
                            <Button
                                variant='outlined'
                                size='medium'
                                onClick={ onCancelForm }
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant='contained'
                                size='medium'
                                onClick={ onSubmitReclamo }
                                type='submit'
                            >
                                Enviar
                            </Button>
                        </div>
                    </form>
                    ))
                }
            </div>
        </>
    )
}

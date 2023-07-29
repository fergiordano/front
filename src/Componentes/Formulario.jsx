import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Formulario = () =>{

    const URL = 'http://localhost:4200/usuarios';

    console.log(URL);

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { 
            nombre: '',
            apellido: '',
            email: '',
            mensaje: ''
        }
    });
    
    const onSubmit = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL, datos)
            e.target.reset();
            console.log(URL);
        } catch (error) {
            console.log(error);
        }
    }

/*  const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */


    return (
        <div className="container mt-5">
            <div className="text-center m-5">
                <h1>Formulario de Registro</h1>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Nombre: </label>
                    <input 
                        placeholder='Nombre'
                        type= 'text'
                        name='nombre'
                        {...register('nombre', 
                            {
                                required: true,
                                maxLength: 50
                            })
                        }
                    />
                </Form.Field>
                {errors.nombre && <p className="errores">El nombre es obligatorio y con un máximo de 50 caracteres</p>}

                <Form.Field>
                    <label>Apellido: </label>
                    <input 
                        placeholder='Apellido'
                        type='text'
                        name='apellido'
                        {...register('apellido', 
                            {
                                required: true,
                                maxLength: 80
                            })
                        }
                    />
                </Form.Field>
                {errors.apellido && <p className="errores">El apellido es obligatorio y con un máximo de 80 caracteres</p>}

                <Form.Field>
                    <label>Email: </label>
                    <input 
                        placeholder='Email'
                        type='email'
                        name='email'
                        {...register('email', 
                        {
                            required: true,
                            // eslint-disable-next-line no-useless-escape
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })
                        }
                    />
                </Form.Field>
                {errors.email && <p className="errores">El email es obligatorio</p>}

                <Form.Field>
                    <label>Mensaje: </label>
                    <input 
                        placeholder='Escriba su mensaje '
                        type='text'
                        name='mensaje'
                        {...register('mensaje',
                        {
                            required: true,
                        })
                        }   
                    />
                </Form.Field>
                

                <div className='centrar'>
                        <Button.Group>
                            <Button type='button' onClick={() => reset()} primary>Limpiar Formulario</Button>
                            <Button.Or />
                            <Button type='submit' positive>Enviar Datos</Button>
                        </Button.Group>
                    {/* 
                    <Button type='submit'>Enviar Datos</Button>
                    <Button type='button' onClick={() => reset()}>Limpiar Formulario</Button> 
                    */}
                </div>
            </Form>
        </div>
    )}


export default Formulario;
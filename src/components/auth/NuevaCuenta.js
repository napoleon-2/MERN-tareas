import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const NuevaCuenta = () => {
    // state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar: ''
    })
    // extraer de usuario
    const {nombre,  email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value 
        })
    }

    //Cuando el usuario quiera iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
    }

    //validar que no haya campos vacios

    //password minimo de 6 caracteres

    // los dos passeword son iguales
    
    //pasarlo al action

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Nueva Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="ingresa tu Nombre"
                            value={nombre}
                            onChange={onChange}

                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ingresa tu email"
                            value={email}
                            onChange={onChange}

                        />
                    </div>    
                    <div className="campo-form">
                        <label htmlFor="password">Contrase??a</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="ingresa tu contrase??a"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contrase??a</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu contrase??a"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" 
                               className="btn btn-primario btn-block"
                               value="Registrarme"/>

                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">Volver a Iniciar Sesion</Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;
import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario} = proyectoContext;

    
    
    //state del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });
    //extraer nombre del proyecto
    const {nombre} = proyecto;
    //lee los comentarios del proyecto
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value 
        })
    }
    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
         e.preventDefault();
         //validar el proyecto


         //agregar el state

         //reiniciar el form

         
         

    }
    //mostrar el formulario
    const onClickFormulario = () => {
             mostrarFormulario();
         }
    return ( 
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo Proyecto
            </button>
            {
                formulario ? 
                (
                    <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                    >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />

                    <input 
                        tipe="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                    </form>
                ) : null
            }
        </Fragment>
        );
}
 
export default NuevoProyecto;
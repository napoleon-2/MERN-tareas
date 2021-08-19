import React, {Fragment, useState} from 'react';
const NuevoProyecto = () => {
    //state del proyecta
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
    return ( 
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
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
        </Fragment>
        );
}
 
export default NuevoProyecto;
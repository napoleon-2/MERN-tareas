import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
     //extraer si un proyecto esta activo
     const proyectosContext = useContext(proyectoContext);
     const {proyecto} = proyectosContext;
    
    
    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext)
    const {tareaSeleccionada, errorTarea, agregarTarea, validarTarea, obtenerTareas,
    actualizarTarea, limpiarTarea} = tareasContext;
    
    //Effect detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaSeleccionada !== null){
            guardarTarea(tareaSeleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada]) 
     // state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })
    //extraer el nombre del proyecto
    const {nombre} = tarea;

      //si no hay proyecto seleccionado
    if(!proyecto) return null
    //array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto ;

    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()

        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //Si es edicion o si es nueva tarea
        if(tareaSeleccionada === null) {
           
            //agregar la nueva tarea  al state de tareas 
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea); 
        }else{
            //actualizar tarea existente
            actualizarTarea(tarea);
            //eliminar tarea seleccionada del state
            limpiarTarea();
        }

       
        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyecto.id);

        //reiniciar el form 
        guardarTarea({
            nombre: ''
        })
    }
    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />

                    <div className="contenedor-input">
                        <input
                            type="submit"
                            className="btn btn-primario btn-submit btn-block"
                            value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                        />
                    
                    </div>     

                    
                </div>
            </form>
            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTarea;
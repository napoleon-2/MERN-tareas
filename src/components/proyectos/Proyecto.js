import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {
    //obtener el state del proyecto
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;
    
    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext)
    const {obtenerTareas} = tareasContext;
    
    //funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id);// Fijar un proyecto actual
        obtenerTareas(id);//filtrar las tareas cuando se de click
    }
    return ( 
        <li>
            <button type="button"
                    className="btn btn-blank"
                    onClick={() => seleccionarProyecto(proyecto.id)}
                    >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;
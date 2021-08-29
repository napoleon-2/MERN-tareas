import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
const ListadoProyectos = () => {
   
   
    //extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;
    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
        //eslint-disable-next-line
    }, []);
    //revisar si proyectos tiene contenidos
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;
    
   

    return (  
        <ul className="listado-proyectos">
            <TransitionGroup> 
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        className="proyecto"
                    > 
                        <Proyecto 
                            
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
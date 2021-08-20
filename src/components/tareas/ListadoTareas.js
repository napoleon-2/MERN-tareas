import React, {Fragment} from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareasProyecto = [
        { nombre: 'Elejir Plataforma', estado: true},
        { nombre: 'Elejir Colores', estado: false},
        { nombre: 'Elejir Plataformas de Pago', estado: false},
        { nombre: 'Elejir Hosting', estado: true},
    ];

    return (  
        <Fragment> 
            <h2>Proyectos: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea =>
                        <Tarea 
                            tarea={tarea}
                        /> )
                }
            </ul>
        </Fragment>
    );
}
 
export default ListadoTareas;
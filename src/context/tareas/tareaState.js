import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO,
        AGREGAR_TAREA
        } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
        { nombre: 'Elejir Plataforma', estado: true, proyectoId: 1},
        { nombre: 'Elejir Colores', estado: false, proyectoId: 2},
        { nombre: 'Elejir Plataformas de Pago', estado: false, proyectoId: 3},
        { nombre: 'Elejir Hosting', estado: true, proyectoId: 4},
        { nombre: 'Elejir Plataforma', estado: true, proyectoId: 1},
        { nombre: 'Elejir Colores', estado: false, proyectoId: 2},
        { nombre: 'Elejir Plataformas de Pago', estado: false, proyectoId: 3},
        { nombre: 'Elejir Hosting', estado: true, proyectoId: 4},
        { nombre: 'Elejir Plataforma', estado: true, proyectoId: 1},
        { nombre: 'Elejir Colores', estado: false, proyectoId: 2},
        { nombre: 'Elejir Plataformas de Pago', estado: false, proyectoId: 3},
        { nombre: 'Elejir Hosting', estado: true, proyectoId: 4},
        ],
        tareasProyecto: null
    }
    //crear dispatch y state
    const[state, dispatch] = useReducer(TareaReducer, initialState);
    //Crear las funciones 

    //obtener las tareas  de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;
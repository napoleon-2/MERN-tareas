import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { TAREAS_PROYECTO,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        ESTADO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA,
        LIMPIAR_TAREA
        } from '../../types';

import { v4 as uuidv4 } from 'uuid';       

const TareaState = props => {
    const initialState = {
        tareas: [
        { id: 1, nombre: 'Elejir Plataforma', estado: true, proyectoId: 1},
        { id: 2, nombre: 'Elejir Colores', estado: false, proyectoId: 2},
        { id: 3, nombre: 'Elejir Plataformas de Pago', estado: false, proyectoId: 3},
        { id: 4, nombre: 'Elejir Hosting', estado: true, proyectoId: 4},
        { id: 5, nombre: 'Elejir Plataforma', estado: true, proyectoId: 1},
        { id: 6, nombre: 'Elejir Colores', estado: false, proyectoId: 2},
        { id: 7, nombre: 'Elejir Plataformas de Pago', estado: false, proyectoId: 3},
        { id: 8, nombre: 'Elejir Plataforma', estado: true, proyectoId: 4},
        { id: 9, nombre: 'Elejir Colores', estado: false, proyectoId: 1},
        { id: 10, nombre: 'Elejir plataformas de Pago', estado: false, proyectoId: 2},
        { id: 11, nombre: 'Elejir Plataforma', estado: true, proyectoId: 3},
        { id: 12, nombre: 'Elejir Colores', estado: false, proyectoId: 4},
        { id: 13, nombre: 'Elejir plataformas de Pago', estado: false, proyectoId: 3},
        ],
        tareasProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null
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
        tarea.id = uuidv4()
        
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Valida y muestra el error en caso de ser necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
           
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA ,
            payload: id
        })
    }

    //Cambia el stado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    //Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    //Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //Elimina la tarea seleccionada
    const limpiarTarea = () =>{
        dispatch({
            type: LIMPIAR_TAREA,

        })
    }
    
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;
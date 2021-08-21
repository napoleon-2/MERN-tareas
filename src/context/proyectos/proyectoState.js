import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types'


const ProyectoState = props => {
    
    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},     
        {id: 3, nombre: 'Diseño web'}          
    ]
    const initialState = {
        proyectos : [],
        formulario : false 
    }
    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    //obtener los proyectos 
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos 
        })
    }
    return (
        <ProyectoState>  
            <proyectoContext.Provider
                value={{
                    proyectos: state.proyectos,
                    formulario: state.formulario,
                    mostrarFormulario,
                    obtenerProyectos
                }}
            >
                {props.children}
            </proyectoContext.Provider>
        </ProyectoState>
    )
}
export default ProyectoState;
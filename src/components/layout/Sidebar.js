import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tareas</span></h1>
                <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
            </div>
        </aside>
     );
}
 
export default Sidebar;
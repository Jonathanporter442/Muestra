import { Busqueda } from "../Componentes/Busqueda/Busqueda";
import { GridPeliculas } from "../Componentes/GridPeliculas/GridPeliculas";

export function Inicio(){
    return <div> 
        
        <Busqueda/>
        <GridPeliculas/>
    </div>
}
import styles from "./Busqueda.module.css";
import { BiSearchAlt } from 'react-icons/bi';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../GridPeliculas/MyHooks/UseQuerry";

export function Busqueda() {
    const [BusquedaTexto, setBusquedaTexto] = useState("");
    const history = useHistory();
    const handlesubmit =  (e) => {
        e.preventDefault();
        history.push("/?search=" + BusquedaTexto);
    };
    const query=useQuery();
    const search = query.get("search");

    useEffect(() => {
        setBusquedaTexto(search || "");
    }, [search]);

    return (
        <form className={styles.ContenedorForm} onSubmit={handlesubmit}>
            <div className={styles.CajaBusqueda}>
                
            <input 
                className={styles.InputBusqueda} 
                type="text" 
                value={BusquedaTexto} 
                onChange={(e) => setBusquedaTexto(e.target.value)}/>
               
                <button className={styles.Boton} type="submit"><BiSearchAlt size={20}/></button>
            </div>
        </form>
    )
}

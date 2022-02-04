
import styles from "./DetallesPelis.module.css"
import {useParams} from "react-router";
import { useEffect, useState } from "react";
import { get } from "../Utilidades/httpClient";
import { SpinnerCarga } from "../Componentes/SpinnerCarga/SpinnerCarga";


export function DetallesPelis (){
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, SetMovie] = useState(null);
    


    
    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then(data => {
            SetMovie(data);
            setIsLoading(false);
        })
    }, [movieId]);
    if(isLoading){
        return <SpinnerCarga/> 
    }
    if(!movie){
        return null;
    }

    const imageUrl ="https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.ContanedorDetalles}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt="" />

        <div className={`${styles.detallesText}${styles.col}`}>
            <p className={styles.PrimerElemento}>
                <strong>Titulo: </strong> {movie.title}
            </p>
            
            <p>
                <strong>Genero/os: </strong>{movie.genres.map(genre => genre.name).join(", ")}
            </p>
            
            <p>
                <strong>Descripcion: </strong> {movie.overview}
            </p>
       
        </div>

        </div>
    );
}
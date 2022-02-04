import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./CardPelis.module.css"

export function CardPelis({movie}){
    const imageUrl ="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return < li className={styles.PeliCard}>
    
    <Link to={"/Movies/" + movie.id}> 

    <img className={styles.PeliImagen}
    width={230} 
    height={345}
    src={imageUrl} 
    alt={movie.title}/>
    <div >{movie.title}</div>
    
    </Link>
    </li>;
}

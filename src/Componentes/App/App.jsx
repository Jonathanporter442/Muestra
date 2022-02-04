/*import { GridPeliculas } from "../GridPeliculas/GridPeliculas";*/
import styles from "./App.module.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { DetallesPelis } from "../../Paginas/DetallesPelis";
import { Inicio } from "../../Paginas/Inicio";

export function App(){
    return (
    <Router>
        <header>
           
            <Link to="/" > <h1 className={styles.AppHead}>Wolfs Movies</h1></Link>
            
        </header>
        
        <main>

           <Switch>
               <Route path="/Movies/:movieId"><DetallesPelis/></Route>
               <Route path="/"><Inicio/></Route>
           </Switch>

        </main>
    </Router>
    );
}
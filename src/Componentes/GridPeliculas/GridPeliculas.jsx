import {CardPelis}  from "../CardPelis/CardPelis";
import styles from "./GridPeliculas.module.css";
import { useState,useEffect } from "react";
import { get } from "../../Utilidades/httpClient";
import {SpinnerCarga} from "../SpinnerCarga/SpinnerCarga"
import { useQuery } from "./MyHooks/UseQuerry";
import InfiniteScroll from 'react-infinite-scroll-component';

export function GridPeliculas (){
  
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const query=useQuery();
  const search = query.get("search");
  console.log(search);
  const [page, setpage] = useState(1);

  useEffect(() => {
    setisLoading(true);
    const searchUrl =search ?
     "/search/movie?query=" + search + "&page=" + page
     :"/discover/movie?page=" + page;
    get(searchUrl)
    .then((data) =>{ 
     setMovies(prevMovies=>prevMovies.concat(data.results));
     setisLoading(false);
  });
},[search, page]);


  return(
    <InfiniteScroll dataLength={movies.length} 
      hasMore={true} 
      next={()=>setpage((prevPage)=> prevPage + 1)}
      loader={<SpinnerCarga/>}
    >
   <ul className={styles.Grideo}>
     
     {movies.map((movie) => 
     <CardPelis key={movie.id}movie={movie}/>
     )}
     
   </ul></InfiniteScroll>
   );
}
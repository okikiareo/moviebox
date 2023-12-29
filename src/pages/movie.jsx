import {useEffect, useState} from "react";
import{useParams} from "react-router-dom" 


function Movie() {
    const { id } = useParams();
   
    const [movie, setMovie] = useState([]);
    useEffect(() => {
       fetch("https://api.themoviedb.org/3/find/")
       .then(data => data.json())
       .then(movie => setMovie(movie))
    }, []);
    return (
       <div >
          <div>
             {movie.title}
             {movie.vote_average}
            {id}
          </div>
       </div>
    );
 }
 export default Movie;
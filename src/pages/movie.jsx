import {useEffect, useState} from "react";
import{useParams} from "react-router-dom" 
import home from "../assets/home.svg"
import projector from "../assets/projector.svg"
import tv from "../assets/tv.png";


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
        <div className="menu" id="menus-card">
                    <ul>
                        <li className=" flex"><img src={tv} alt="" />
                            <h3>MovieBox</h3>
                        </li>
                        <li className=" flex"> <img src={home} alt="" /> <h4>Home</h4> </li>
                        <li className=" flex"> <img src={projector} alt="" /> <h4>Movies</h4> </li>
                        <li className=" flex"> <img src={projector} alt="" /> <h4>TV Series</h4> </li>
                        <li className=" flex"> <img src={projector} alt="" /> <h4>Upcoming</h4> </li>
                        <div>
                            
                        </div>
                        <li className=" flex"> <img src={projector} alt="" /> <h4>Logout</h4> </li>
                    </ul>
                </div>
          <div>
             {movie.title}
             {movie.vote_average}
            {id}
          </div>
       </div>
    );
 }
 export default Movie;
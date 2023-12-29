import {
  useEffect,
  useState
} from "react";
import axios from "axios";
import Moviecard from "../components/Moviecard"
import left from "../assets/left.svg"
import right from "../assets/right.svg"
// import { Link } from "react-router-dom";

function Api() {
  const api_url = "https://api.themoviedb.org/3/";
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const {
      data: {
        results
      }
    } = await axios.get(`${api_url}/discover/movie?api_key=d0f00c652a0ec5b927f52935e6ac4e46&sort_by=popularity.desc&language=en-US&page=1`)
    setMovies(results)
    // console.log("DATA", data) 
  }
  useEffect(() => {
    fetchMovies()
  }, [])
  const renderMovies = () => (
    movies.map(movie => (
      <Moviecard
        key={movie.id}
        movie={movie}
      />
    ))
  )
  return (
    <div className="container">
      <div className="test">
        <h2> Featured Movie </h2>
        <div className="slide">
          <div className="slide-inner">
            {renderMovies()}
          </div>
        </div>
        <div className="arrows">
            <div className="slide-arrow">
              <img src={left} alt="" />
            </div>
            <div className="slide-arrow">
              <img src={right} alt="" />
            </div>
          </div>
      </div>

    </div>
  )
}
export default Api;
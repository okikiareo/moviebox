import {
  useEffect,
  useState
} from "react";
import axios from "axios";
import Moviecard from "../components/Moviecard"
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
      <div className="">
        <h2> Featured Movie </h2>
        <div className="slide">
          <div className="slide-inner">
            {renderMovies()}
          </div>

          <div className="slide-arrow"></div>
          <div className="slide-arrow"></div>
        </div>
      </div>
    </div>
  )
}
export default Api;
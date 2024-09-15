import {
  useEffect,
  useState
} from "react";
import axios from "axios";
import Moviecard from "../components/Moviecard"
import left from "../assets/left.svg"
import right from "../assets/right.svg"
import search from "../assets/searched.svg"

function Api() {
  const [movies, setMovies] = useState([])
  const [slider, setSlider] = useState({
    count: 0
  })
  const [selectedMovie, setSelectedMovie] = useState([]);

  // Test
  const [searchKey, setSearchKey] = useState("");

  const searchMovie = (e) => {
    e.preventDefault()
    fetchMovies(searchKey)
  }
  // test
  // import axios from 'axios';

  // Ensure api_url is correctly set
  const api_url = 'https://api.themoviedb.org/3';
  const api_key = 'd0f00c652a0ec5b927f52935e6ac4e46'; 
  
  const fetchMovies = async (searchKey) => {
      const type = searchKey ? "search" : "discover";
      const url = `${api_url}/${type}/movie`;
      
      const params = {
          api_key,
          sort_by: 'popularity.desc',
          language: 'en-US',
          page: 1,
          query: searchKey || '' 
      };
  
      console.log('Fetching movies from URL:', url);
      console.log('With params:', params);
  
      try {
          const response = await axios.get(url, { params });
          const { results } = response.data;
  
          console.log('API Response:', response.data); 
          setMovies(results); 
  
      } catch (error) {
          console.error('Error fetching movies:', error.response ? error.response.data : error.message);
          
      }
  };
  
  useEffect(() => {
    fetchMovies()
  }, [])
  const renderMovies = () => (
    movies.map(movie => (
      <Moviecard
        key={movie.id}
        movie={movie}
        selectMovie={setSelectedMovie}
      />
    ))
  )

  const handleSlider = (type) => {
    if (type === "next") {
      setSlider(prevCount => {
        return { count: prevCount.count + 1 }
      });
    } else {
      if (slider.count < 0) { return }
      setSlider(prevCount => {
        return { count: prevCount.count - 1 }
      });
    }
    console.log(slider)
    console.log(movie)
  }
  return (
    <div className="container"id="moviecard" >
      <div className="test">
        <div className="feature-box flex">
          <h2> Featured Movie </h2>
          <h5>Yes, now search a movie let's see!    </h5>
          <form onSubmit={searchMovie}>
            <div className="search desktop flex">
              <input type="text" placeholder="What do you want to watch?" onChange={(e) => setSearchKey(e.target.value)} />
              <button className="flex" type={"submit"}>
                <img src={search} />
              </button>
            </div>
          </form>
        </div>


        <div className="slide">
          <div style={{ transform: `translateX(-${slider.count * 100}%)` }} className="slide-inner">
            {renderMovies()}
          </div>
          <div onClick={() => handleSlider("prev")} className="slide-arrow slide-arrow-left">
            <img src={left} alt="" />
          </div>
          <div onClick={() => handleSlider("next")} className="slide-arrow slide-arrow-right">
            <img src={right} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
export default Api;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function Movie() {
   const { id } = useParams();
   const [trailer, setTrailer] = useState({});

   useEffect(() => {
      const options = {
         method: 'GET',
         headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGYwMGM2NTJhMGVjNWI5MjdmNTI5MzVlNmFjNGU0NiIsInN1YiI6IjY1MDBjODJmM2ZmMmRmMDBhZGZiMjNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3w47iZ_c-PBNinKmhq_M_n5aq12XDqHh8UggATTuis4'
         }
      };

      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
         .then(response => response.json())
         .then(response => {
            const trailer = response.results.find(movie => (
               movie.name === "Official Trailer"
            ));
            setTrailer(trailer);
         })
         .catch(err => console.error(err));
   }, []);

   console.log(trailer)

   return (
      <div className="trailer">
         <h2 className="trailer-title">Video</h2>
         <YouTube
            videoId={trailer.key}
            className="trailer-video"
            opts={{
               playerVars: {
                  autoplay: 1,
                  controls: 0
               }
            }}
         />
      </div>
   );
}
export default Movie;
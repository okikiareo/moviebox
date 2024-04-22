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
            if (!trailer) {
               const trailer = response.results[0];
               setTrailer({ trailer })
               return;
            }
            setTrailer(trailer);
         })
         .catch(err => console.error(err));
   }, []);

   console.log(trailer)

   return (
      <div className="trailer">
         
         <div className="youtube-container">
            <YouTube
            videoId={trailer.key}
            className="trailer-video"
            containerClassName={"youtube"}
            opts={{
               width: '100%',
               height: "100%",
               playerVars: {
                  autoplay: 1,
                  controls: 0, 
                  modestbranding: 0,
                  rel: 0
               }
            }}
         />
         </div>
         
      </div>
   );
}
export default Movie;
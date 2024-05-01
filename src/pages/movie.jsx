import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import star from "../assets/star.svg"
import link from "../assets/link.svg"

function Movie() {
   const { id } = useParams();
   const [trailer, setTrailer] = useState({});
   const [state, setState] = useState([])

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

   // movie data


   useEffect(() => {

      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d0f00c652a0ec5b927f52935e6ac4e46&sort_by=popularity.desc&language=en-US&page=1`)
         .then(data => data.json())
         .then(movie => { console.log(movie); setState(movie) })
   }, [])
   // console.log(trailer)
   console.log(state)

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
                     // autoplay: 1,
                     controls: 0,
                     modestbranding: 0,
                     rel: 0
                  }
               }}
            />
         </div>
         <div className="trailer_infos">
            <div className="trail_head flex">
               <div className="head_first flex">
                  <h4 className="title">{state.title}</h4>
                  <h4>Released on: {state.release_date}</h4>
               </div>
               <div className="vote flex">
                  <img src={star} />
                  <p>{state.vote_average}</p>
               </div>
            </div>
            <div className="trail_body flex">
               <div className="trailbody_first">
                  <p><b>Overview:</b> {state.overview}</p>
                  <div className="tagline"> <span className="tag ">Tagline:</span> <span className="line">{state.tagline}</span></div>
               </div>
               {/* <p className="" >
                  {trailer.genres.map(genre => {
                     return (<p key={genre.id} className="">
                        {genre.name}
                     </p>)
                  })}
               </p> */}
               <div className="trailbody_second">
                  <p className="stat"><span>Status: </span>{state.status}</p>
                  <p className="hmpg"><a href={state.homepage} target="_blank" className="flex"><img src={link} alt="" /> Homepage</a></p>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Movie;
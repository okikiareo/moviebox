import React from "react";
import apple from "../assets/tomato.svg";
import imdb from "../assets/imdb.svg";
import { Link } from "react-router-dom";
import imgbreak from "../assets/imgbreak.svg"

const Moviecard = ({ movie }) => {
    const image_path = "https://image.tmdb.org/t/p/w500";
    console.log(movie)
    return (

        <Link to={`../pages/movies/${movie.id}`}>
            <div className="movie-card" data-testid="movie-card">
                {movie.poster_path ? <img src={`${image_path}${movie.poster_path}`} className="movie-cover" data-testid="movie-poster" alt="movie poster" />
                    : 
                    <div className="imgnan"><img src={imgbreak} alt="" /> No image found</div>
                }
                <div>
                    <h5 className="date" data-testid="movie-release-date">{movie.release_date}</h5>
                </div>
                <h4 className="title" data-testid="movie-title">
                    {movie.title}
                </h4>
                <div className="rate flex">
                    <div className="imdb flex"><img src={imdb} />
                     <p>{movie.vote_average}/10</p></div>
                    <div className="flex"> <p className="vote">{movie.vote_count}</p><img src={apple} /></div>
                </div>
                <p>{movie.genre}</p>
            </div>
        </Link>


    )
}
export default Moviecard;
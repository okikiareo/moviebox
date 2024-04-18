import { Outlet } from "react-router-dom";

import MovieHeader from "../components/MovieHeader";
import MovieFooter from "../components/MovieFooter";

const MovieLayout = () => {
    return (
        <>
            <div className="movie-layout">
                <MovieHeader />
                <Outlet />
            </div>
        </>
    );
}

export default MovieLayout;
import { Link } from "react-router-dom";

import tv from "../assets/tv.png";
import home from "../assets/home.svg";
import projector from "../assets/projector.svg";
import tvshow from "../assets/tvshow.svg";
import cal from "../assets/calendar.png";
import logout from "../assets/logout.svg";

const MovieHeader = () => {

    const btnEffect = () =>{
    // const movieBtn = document.querySelector(".movie-btn");
    const menu = document.querySelector(".menu");
    // const fixBtn = document.querySelector(".fixed-btn");
    menu.classList.toggle("active")
}
    

    return (
        <div className="menu" id="menus-card">
            <ul>
                <li className="movie-btn flex" onClick={() => btnEffect()}> <img src={tv} alt="" />
                    <h3>MovieBox</h3>
                </li>
                <li>
                    <Link className="sub-menu flex" to="/">
                        <div className="join flex">
                            <img src={home} alt="" />
                            <h4>Home</h4>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="sub-menu cur-page flex" to="#">
                        <div className="join flex">
                            <img src={projector} alt="" />
                            <h4>Movies</h4>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="sub-menu flex" to="./pages/tvseries">
                        <div className="join flex">
                            <img src={tvshow} alt="" />
                            <h4>TV Series</h4>
                        </div>
                    </Link>
                </li>
                <li><Link className="sub-menu flex" to="./pages/upcoming">
                    <div className="join flex">
                        <img src={cal} alt="" />
                        <h4>Upcoming</h4>
                    </div>
                </Link>
                </li>
                <div className="play-quiz">
                    <p> Play movie quizes and earn free tickets</p>
                    <p className="cur-play">50k people are playing right now</p>
                    <Link href="" className="start-playing">start playing</Link>
                </div>
                <li><Link className="sub-menu pushin flex"><img src={logout} alt="" />
                    <h4>Logout</h4>  </Link> </li>
            </ul>
            <form method="POST" action="/login"></form>
        </div>
    );
}

export default MovieHeader;
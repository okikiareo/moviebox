import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import tv from "../assets/tv.png";
import menu from "../assets/Menu.svg";
import apple from "../assets/tomato.svg";
import imdb from "../assets/imdb.svg";
import search from "../assets/search.svg"
import play from "../assets/play.png"
import Api from "../api/Api";
// import Moviebox from "./Moviebox";


const Home = ({ }) => {
    const [searchKey, setSearchKey] = useState("");

    const searchMovie = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <div className="home">
                <div className="inner">
                    <div className="header flex">
                        <div className="logo flex">
                            <img src={tv} alt="" /> 
                            <h2>MovieBox</h2>
                        </div>
                        <form onSubmit={searchMovie}>
                            <div className="search desktop flex">
                                <input type="text" placeholder="What do you want to watch?" />
                                <button className="flex" type={"submit"}>
                                    <img src={search} />
                                </button>
                            </div>
                        </form>
                        {/* {searchKey} */}
                        <div className="sign flex">
                            <a>Sign in</a>
                            <img src={menu} />
                        </div>
                    </div>
                    <div className="search mobile flex">
                        <input type="text" id="input1" placeholder="What do you want to watch?" />
                        <button className="flex" type={"submit"}>
                                    <img src={search} />
                                </button>
                    </div>
                    <div className="header-info">
                        <h3>John Wick 3: <br></br> Parabellum</h3>
                        <div className="two-icons flex">
                            <div className="idm-icon">
                                <img src={imdb} /> 86.0/100
       </div>
                            <div className="apple-icon">
                                <img src={apple} /> 97%
       </div>
                        </div >
                        <div className="info">
                            John Wick is on the run after killing a member of the international
                            assassins' guild, and with a $14 million price tag
                            on his head, he is the target of hit men and women everywhere.
       </div>
       <div>
           
                    <a className="play flex" to="">
                            <img src={play} /> <span> WATCH TRAILER</span>
       </a> 
         
            
       </div>
                 
                    </div>
                </div>
            </div>
             <Api />
          { /* <Moviebox /> */}
        </>
    )
}
export default Home;
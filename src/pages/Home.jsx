import React from "react";
import wic from "../assets/wic.mp4"
import tv from "../assets/tv.png";
import sound from "../assets/sound.svg";
import mute from "../assets/mute.svg";
import apple from "../assets/tomato.svg";
import imdb from "../assets/imdb.svg";
import play from "../assets/play.png"
import Api from "../api/Api";
import Moviebox from "../components/Moviebox";
import { useState, useRef } from 'react';


const Home = ({ }) => {

  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
      if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;  
          setIsMuted(!isMuted);  
      }
  };

    return (
        <>
            <div className="home">
                <video src={wic} ref={videoRef} autoPlay loop muted={isMuted} />

                <div className="inner">
                    <div className="header flex">
                        <div className="logo flex">
                            <img src={tv} alt="" />
                            <h2>MovieBox</h2>
                        </div>
                        <div className="sign flex" onClick={toggleMute}>
                            <button>Unmute</button>
                            <div className="sound flex">
                            <img src={isMuted ? mute : sound}/>
                            </div>
                        </div>
                    </div>
                    <div className="header-info">
                        <h3>John Wick 4: <br></br> Parabellum</h3>
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
                        <div className="pay-btn"> 

                            <a className="play flex" href="#moviecard">
                                <img src={play} /> <span> WATCH TRAILERS</span>
                            </a>


                        </div>

                    </div>
                </div>

            </div>
            <Api />
            <Moviebox />
            {/* <MovieFooter /> */}

        </>
    )
}
export default Home;
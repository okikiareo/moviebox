
     import {useEffect, useState} from "react";

     function Moviebox (){
        const[state, setState]=useState([])
        
        useEffect(()=> {
              
      //    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d0f00c652a0ec5b927f52935e6ac4e46&sort_by=popularity.desc&language=en-US&page=1').then(data => data.json()).then(movies => {console.log(movies); setState(movies)})  
      },  []) 
            return(
                 <div>
                     {/* <img src={state.backdrop_path}/>
sigh
                     <div>{state.title}</div> */}
               </div>
            )
      }    
     export default Moviebox
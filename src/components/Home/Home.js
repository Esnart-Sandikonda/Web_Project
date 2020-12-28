import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        
        <div className="main">

        <h1>Top stories</h1>
        <div className="i">
        <h2 className="h2">Politics</h2>
        <p>President Dr. Lazarus Chakwera expressed concern with continued mob justice in some parts of the country.</p>
        <img src="./pictures/FB_IMG_16033201726454000.jpg" width="300" height="250" alt="photo of president"/> 
        <p>He visited kumbali Lodge in Lilongwe's Area 44 which whose part was set on fire by an angry community in
         the eary hours of sunday on 18th october.</p>
        <p className="Wee"><b>click  <Link className="p1" to="/Politics"> Here </Link> for more Politics news</b></p>
         </div>

         <div class="ii">
        <h2 className="h2">sports</h2>
        <p>There is no need to leave the couch tonight with UEFA champions league lineup like this</p>
        <img src="./pictures/FB_IMG_16033204662889188.jpg" width="280" height="300" alt="players"/>
        <p className="Wee"><b>Click <Link className="p1" to="/Sports"> Here </Link> for more Sports news </b></p>
        </div>

         <div class="iii">
        <h2 class="h2">Entertainment</h2>
        <img src="./pictures/FB_IMG_16033216616863993.jpg" width="300" height="300" alt="pictureof musicians"/>
        <p> <b>Daredevilz</b> first show this year!! Happening at <i>Scalles Cafe</i> this saturday from 10pm to 7am. 
        The Daredevilz are ready to perfom with saint and other artist.</p>
        <p className="Wee"><b>Click <Link className="p1" to="/Entertainment" >Here</Link> for more Entertainment news</b></p>
        </div> 
    </div>
    )
}


export default Home;

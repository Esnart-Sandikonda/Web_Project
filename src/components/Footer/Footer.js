import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Footer = () =>{
    return(
        
        <div class="line">
            Online NewsPaper <br/> 
            the easiest way to know whats happening around <br/>
            at a cheaper price
            
            <p className="para"><i>Dont forget to subscribe by clicking the button below</i></p>
            <form>
                <Link to="/Buy" ><input type="button" value="subscribe" /> </Link>               
            </form>
            
            <p id="co">@www.dailyNewsPaper.com</p>
    </div>
    
    )
}


export default Footer;
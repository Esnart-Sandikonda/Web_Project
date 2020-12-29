import React from 'react';
import '../style.css'

const Buy = () =>{
    return(
        <div className="buy">
           <h1> subscribe page</h1>
           <h2>choose the options below</h2>

           <p>Choice 1: <br/>
           Mk250 per day
           </p>

           <p>Choice 2: <br/>
           Mk750 per day
           </p>

           <p>Choice 3: <br/>
           Mk2000 per day
           </p>

           <form>

               Enter your choice: <br/>
               <input type="text" placeholder=" "  /> <br/>
               Firstname: <br/>
               <input type="text" placeholder=" "  /> <br/>
               Lastname: <br/>
               <input type="text" placeholder=" "  /> <br/>
               <input type="submit" placeholder= "Subscribe" />
           </form>

        </div>
    )
}


export default Buy ;
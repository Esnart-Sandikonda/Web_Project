import React ,{Component} from 'react';
import ReactDom from 'react-dom';



class Welcome extends React.Component {

    constructor(){
        super()
      
    }
    
      
    
    
    render(){
      return(
  
       <div>
        <h2>employee details</h2>
                  <p>
                      <label htmlFor="" > employeeid : <b>{this.props.id}</b></label>

                  </p>
  
    </div> 
        
      ) ;
  
      
  
    }
  
  }
  
  export default Welcome;
  
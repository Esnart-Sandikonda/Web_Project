import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/Home/Home'
import Buy from './components/Buy/Buy'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Politics from './components/Politics/Politics'
import Sports from './components/Sports/Sports'
import Entertainment  from './components/Entertainment/Entertainment'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App () {
 return (
  <Router>
  <div className="App">

    <h1 className="one"><i>Daily NewsPaper</i></h1>
   <Nav></Nav>
   <Route path="/Home" component={Home} />
   <Route path="/Buy" component={Buy} />
   <Route path="/About" component={About} />
   <Route path="/Politics" component={Politics} />
   <Route path="/Sports" component={Sports} />
   <Route path="/Entertainment" component={Entertainment} />
   <Footer></Footer>

  </div>
  </Router>
 
  );

}

export default App;


























/*function Todo (todo,index){
return <div className='todo'>
  {todo.text}
   </div>

}

function App () {

  const [todo, setTodo] = useState([
    {
      text: 'learning js',
      iscomplied: false
    },
    {
      text: 'meet friend for lunch',
      iscomplied: false
    },
    {
      text: 'buld really cool todo app',
      iscomplied: false
    }



  ]);

  return (

    <div className='app'>

      <div className='todo-list'>
 
        {todo.map((todo,index) => (

          <Todo  key={index} index ={index} todo = {todo} />

        ))}
      </div>


    </div>


  );


}
export default App;*/





















/*class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-Header">

               <Welcome/>

                </header>
      </div>
      
    );

    

  }

}

export default App;*/

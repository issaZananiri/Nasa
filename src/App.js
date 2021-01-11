import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Components/Home';
import Search from './Components/Search'
import NavBar from './Components/NavBar';
import Favorites from './Components/Favourites';

function App() {


  return (
    <Router>
    <div className="App">
      <NavBar/>
    </div>
    <Route exact path="/home" component={Home} />
    <Route exact path='/search' render={()=><Search/>}/>
    <Route  path='/favorites' render={()=><Favorites  />}/>
    </Router>
  );
}

export default App;

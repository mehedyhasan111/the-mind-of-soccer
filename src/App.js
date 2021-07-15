import './App.css';
import Home from './components/Home/Home';
import '../src/components/Images/banner.png';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        
        
      </ul>
    </nav>
    

    <Switch>
      <Route path="/home">
        <Home></Home>

      </Route>

      

      <Route path="/league/:idLeague">
      <LeagueDetails></LeagueDetails>
      </Route>

      <Route exact path="/">
        <Home></Home>

      </Route>
    </Switch>
  </Router>

      
      



     

    </div>
  );
}

export default App;

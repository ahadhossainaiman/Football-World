
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import LeagueDetails from './component/LeagueDetails/LeagueDetails';

function App() {
  return (
  
    <div>
       <Router>
         <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/league/:leagueId">
           <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="/*">
           <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

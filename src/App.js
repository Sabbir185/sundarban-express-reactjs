import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route path="/home">
            <Home/>
          </Route>

          {/* <Route path="/about">
            <About />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/">
            <Home />
          </Route> */}

        </Switch>
    </Router>
  );
}

export default App;

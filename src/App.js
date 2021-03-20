import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Result from './Components/Result/Result';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>

              <Route exact path="/">
                <Home/>
              </Route>
              
              <Route path="/home">
                <Home/>
              </Route>

              <PrivateRoute path="/destination/:id">
                <Destination></Destination>
              </PrivateRoute>

              <PrivateRoute path="/destination/1">
                <Destination></Destination>
              </PrivateRoute>

              <Route path="/blog">
                <Blog></Blog>
              </Route>

              <Route path="/contact">
                <Contact/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>

              <Route path="/result">
                <Result/>
              </Route>

              <Route path="*">
                <NotFound/>
              </Route>

            </Switch>
        </Router>
    </UserContext.Provider>
    
  );
}

export default App;

import "./App.css";
import Home from "./component/home/home";
import Login from "./component/login/login";
import Register from "./component/register/register";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState } from 'react';

function App() {

    const [user, setLoginUser] = useState({ })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login  setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
            </Route>
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;

import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Games from './components/CreateTourney/Games';
import Bracket from './components/CreateBrackets/Bracket';
import Compete from './components/Compete/Compete';
import up from './layeredwaves.svg'

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <div>
    <img className="nope" src={up} />
    <div className="bottom">
    <div className="spacer">
     
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage  updateUser= { updateUser} /> : <Login updateUser={updateUser} />
            }
            </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
            </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/create">
          {
              user && user._id ? <Games  updateUser= { updateUser} /> : <Login updateUser={updateUser} />
            }
          </Route>

          <Route path="/create-brack-valo">
          {
              user && user._id ? <Bracket game="Valorant"  updateUser= { updateUser} /> : <Login updateUser={updateUser} />
            }
          </Route>

          <Route exact path="/compete">
          {
              user && user._id ? <Compete updateUser= { updateUser} /> : <Login updateUser={updateUser} />
            }
          </Route>


        </Switch>
      </Router>

    </div>
    </div>
    <img src={up} />
    </div>
    </div> 
    
    
  );
}

export default App;

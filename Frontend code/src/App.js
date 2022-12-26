
import './App.css';
import Login from "./components_For_L_R/login_Component/login"
import Homepage from "./components_For_L_R/homepage/homepage"
import Register from "./components_For_L_R/register_Component/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import UpdateandView from './components_For_L_R/employeeData/updateandView';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login"><Login setLoginUser={setLoginUser} /></Route>
          <Route path="/register"><Register /></Route>

          <Route path="/EmployeesData/:id" component={UpdateandView} />
       
        </Switch>
      </Router>
    </div>
  );
}

export default App;

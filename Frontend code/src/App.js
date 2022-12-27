
import './App.css';
import Login from "./components_For_L_R/login_Component/login"
import Homepage from "./components_For_L_R/homepage/homepage"
import Register from "./components_For_L_R/register_Component/register"
import { BrowserRouter , Switch, Route } from "react-router-dom";
import { useState } from 'react';
import UpdateandView from './components_For_L_R/employeeData/updateandView';

function App() {
  const [user, setLoginUser] = useState({})
  //  <Login setLoginUser={setLoginUser} /></Route>
//   <Route >
//   {
//     user && user._id ? <Homepage /> : <Login/>
//   }
// </Route>
  return (
    <BrowserRouter>
      <Switch>
     
        <Route   exact path="/" component={Homepage} />

        <Route path="/login" component={Login} />
        
        <Route path="/register" component={Register} />
        <Route path="/EmployeesCreate" component={UpdateandView} />
        <Route path="/EmployeesData/:id" component={UpdateandView} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;

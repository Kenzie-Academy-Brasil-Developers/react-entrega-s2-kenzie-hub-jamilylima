import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";


function Routes() {

  const [Authorization, setAuthorization] = useState(false)
  const [tec, setTec] = useState([])

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

    if (token) {
     setAuthorization(true)
    }
  }, [Authorization])




  return (

    <Switch>
      <Route exact path="/">
        <Login Authorization={Authorization} setAuthorization={setAuthorization} />
      </Route>

      <Route exact path="/Register">
        <Register Authorization={Authorization}  />
      </Route>
      <Route exact path="/Dashboard">
        <Dashboard Authorization={Authorization} tec={tec} setTec={setTec} setAuthorization={setAuthorization} />
      </Route>
    </Switch>

  );
}

export default Routes;

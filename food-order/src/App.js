import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Registration/RegisterPage";
import MealsScreen from "./components/Screen/MealsScreen";
import Profile from "./components/Screen/Profile/index";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/signin" component={LoginPage} />
      <Route path="/registration" component={RegisterPage} />
      <PrivateRoute path="/meals">
        <MealsScreen />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
}

export default App;

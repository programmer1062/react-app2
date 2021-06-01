import logo from "./logo.svg";
import "./App.css";

import { Login } from "./views/Login";
import { Registration } from "./views/Registration";
import { ForgotPass } from "./views/ForgotPass";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Registration />
        </Route>

        <Route path="/page1" exact>
          <Registration />
        </Route>

        <Route path="/page2" exact>
          <Login />
        </Route>

        <Route path="/page3" exact>
          <ForgotPass />
        </Route>
      </Switch>
    </Router>
  );
}

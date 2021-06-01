import logo from "./logo.svg";
import "./App.css";

import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function App() {
  return (
    <Router>
      {/* avigation Logic */}
      <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
        <Link to="/">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/page1">
              <Nav.Link href="#home">Page1</Nav.Link>
            </Link>
            <Link to="/page2">
              <Nav.Link href="#link">Page2</Nav.Link>
            </Link>
            <Link to="/page3">
              <Nav.Link href="#link">Page3</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Router logic */}
      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>

        <Route path="/">
          <Page1 />
        </Route>
      </Switch>
    </Router>
  );
}

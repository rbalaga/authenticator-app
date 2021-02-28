import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";
import Home from "./src/components/Home/Home";
import LoginForm from "./src/components/login";
import AppLogout from "./src/components/Logout";
import RegisterForm from "./src/components/register";
import AppNavbar from "./src/Header/NavBar";

const AppRouter = () => {
  return (
    <>
      <AppNavbar />
      <Container className="d-flex flex flex-column align-items-center">
        <Jumbotron className="d-flex flex flex-column col-sm-12 my-5 py-0 align-items-center">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/logout">
              <AppLogout />
            </Route>
          </Switch>
        </Jumbotron>
      </Container>
    </>
  );
};

export default AppRouter;

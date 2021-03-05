import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import ViewAccountBalance from "./components/view_account_balancing";
import currentassetpricing from "./components/current.asset.pricing";

class App extends React.Component {

  render() {
    return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <h1 className="navbar-brand">NAME OF APP</h1>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/view_account_balance" component={ViewAccountBalance} />
              <Route path="/current.asset.pricing" component={currentassetpricing} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }
}

export default App
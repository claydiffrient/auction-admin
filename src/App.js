import React, { Component } from "react";
import Heading from "@instructure/ui-core/lib/components/Heading";
import "./App.css";
import Home from "./Home";
import PeopleItems from "./PeopleItems";
import Bids from "./Bids";
import Reports from "./Reports";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading level="h1">Auction Admin</Heading>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/peopleitems" component={PeopleItems} />
            <Route path="/bids" component={Bids} />
            <Route path="/reports" component={Reports} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

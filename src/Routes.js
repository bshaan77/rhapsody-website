import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import Programs from "./containers/Programs";
import NotFound from "./containers/NotFound";
import Calendars from "./containers/Calendars";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/programs" render={() => <Programs />} />
      <Route exact path="/calendar" render={() => <Calendars />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
}

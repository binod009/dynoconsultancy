import React from "react";
import Login from "./component/Login/Login";
import AccessControl from "./component/Access/accessControl";
import Visitor from "./component/tablecontent/visitor/visitor";
import Dash from "./component/dashboard/Dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminTest from "./component/tablecontent/dashboardLayout/AdminTest";
const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={AdminTest} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;

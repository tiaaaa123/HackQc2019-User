import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import UserRouting from './UserRouting';
import StaffRouting from './StaffRouting';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={() => <UserRouting />} exact path="/user" />
        <Route component={() => <StaffRouting />} exact path="/staff" />
        <Route component={() => <Redirect to="/user" />} />
      </Switch>
    </BrowserRouter>
  );
}

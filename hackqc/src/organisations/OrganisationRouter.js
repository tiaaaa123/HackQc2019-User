import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import OrgnanisationList from './OrgnanisationList';
import OrganisationDetail from './OrganisationDetail';

export default class OrganisationRouter extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id" component={OrganisationDetail} />
          <Route path="/" component={OrgnanisationList} />
        </Switch>
      </BrowserRouter>
    )
  }
}

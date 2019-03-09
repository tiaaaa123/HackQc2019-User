import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Scanner from './Scanner';

export default class ScannerRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Scanner} />
        </Switch>
      </BrowserRouter>
    );
  }
}

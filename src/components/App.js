import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

export default ({ history, routes, theme }) => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        {routes.map(({ name, navbar, ...props }) =>
          <Route key={name} exact {...props} />)}
        <Redirect to="/" />
      </Switch>
    </Router>
  </ThemeProvider>
)
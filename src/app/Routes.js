import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as routes from './constants/routes'

/* COMPONENTS */
import Dashboard from 'components/pages/dashboard/Dashboard'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={routes.DASHBOARD.route} component={Dashboard} />
    </Switch>
  )
}

export default Routes

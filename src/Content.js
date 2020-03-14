import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TripsAll from './pages/TripsAll'
import TripEdit from './pages/TripEdit'
import TripShow from './pages/TripShow'
const Content = ()=> {
  return (
    <Switch>
      <Route exact path="/">
        <TripsAll />
      </Route>
    </Switch>
  )
}
export default Content
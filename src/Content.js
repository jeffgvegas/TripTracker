mport React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Songs from './pages/Songs'
import Song from './pages/Song'
import SongEdit from './pages/SongEdit'
import NotFound from './pages/NotFound'
const Content = ()=> {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/songs">
        <Songs />
      </Route>
      <Route exact path="/songs/:songId">
        <Song />
      </Route>
      <Route  path="/songs/:songId/edit">
        <SongEdit />
      </Route>
      <Route  path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}
export default Content
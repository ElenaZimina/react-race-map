import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import CoreLayout from '../views/CoreLayout'
import AppLayout from '../views/AppLayout'
import CookbookView from '../views/MapView'
import NotFoundView from '../views/NotFoundView'

export default function (store, history) {
  const toMain = (nextState, replace) => {
    replace('/recipes');
  };

  return (
    <Route path='/' component={CoreLayout}>
      <IndexRoute onEnter={toMain} />

      <Route component={AppLayout}>
        <Route path='/recipes' component={CookbookView} />
      </Route>

      <Route path='/404' component={NotFoundView} />
      <Redirect from='*' to='/404' />
    </Route>
  )
}

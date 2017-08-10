import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureRoutes from './routes'
import configureStore from './redux/configureStore'
import DevTools from './redux/DevTools'

const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);
const routes = configureRoutes(store, history);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
      {__DEBUG__ && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root')
);

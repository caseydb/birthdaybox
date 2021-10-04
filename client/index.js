import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App';
import { Provider } from 'react-redux';
import reducers from './reducer';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Auth0Provider } from "@auth0/auth0-react";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <Auth0Provider
      domain="dev-zeateo.au.auth0.com"
      clientId="6ckqJq6zKtbLgilJxc1ousV9dU2MLwgr"
      redirectUri={window.location.origin}>
        <Provider store={store}>
            <App />
        </Provider>
      </Auth0Provider>
    </Router>,
  document.getElementById('app')
  )
})

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path=':location' component={App} />
      <IndexRoute component={App} />
    </Route>
  </Router>,
  document.getElementById('root')
)

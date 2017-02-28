import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Router, Route, hashHistory } from 'react-router'
import Container from './Container'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path=':location' component={Container} />
    </Route>
  </Router>,
  document.getElementById('root')
)

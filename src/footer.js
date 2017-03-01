import React from 'react'
import { Link, IndexLink } from 'react-router'

export default class Footer extends React.Component {
  render () {
    const footerClass = this.props.showFooter ? 'footer' : 'footer footer-hide'
    return (
      <footer className={footerClass} id="todoapp-footer">
        <span className="todo-count" id="todo-count">{this.props.todoCount + ' items completed'}</span>
        <ul className="filters">
          <li><IndexLink activeClassName='selected' to='/'>All</IndexLink></li>
          <li><Link activeClassName='selected' to='/Active'>Active</Link></li>
          <li><Link activeClassName='selected' to='/Completed'>Completed</Link></li>
        </ul>
        <button className="clear-completed-show" id="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

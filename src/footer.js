import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
        <footer className="footer" id="todoapp-footer">
          <span className="todo-count" id="todo-count"></span>
          <ul className="filters">
            <li><a href="#/" className="selected">All</a></li>
            <li> <a href="#/active">Active</a></li>
            <li><a href="#/completed" className="">Completed</a></li>
          </ul>
          <button className="clear-completed-show" id="clear-completed">Clear completed</button>
        </footer>
    )
  }
}

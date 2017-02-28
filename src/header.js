import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
        <header className="header">
          <input className="toggle-all" type="checkbox" id="toggle-all" />
          <input className="new-todo" placeholder="What needs to be done?" autoFocus="" id="task-text" />
        </header>
    )
  }
}

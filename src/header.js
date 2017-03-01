import React from 'react'

export default class Header extends React.Component {
  insertTodo (e) {
    if (e.target.value !== '') {
      this.props.onInsertTodo(e.target.value)
    }
    e.target.value = ''
  }

  keyPressed (e) {
    if (e.keyCode === 13) {
      this.insertTodo(e)
    }
  }

  toggleClicked (e) {
    this.props.onToggleAll(e.target.checked)
  }

  render () {
    return (
      <header className="header">
        <input
          className={'toggle-all ' + (this.props.showCheckAll ? 'toggle-all-show' : '')}
          type="checkbox"
          id="toggle-all"
          onChange={this.toggleClicked.bind(this)}
        />
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus="" id="task-text"
          onKeyUp={this.keyPressed.bind(this)}
          onBlur={this.insertTodo.bind(this)}
        />
      </header>
    )
  }
}

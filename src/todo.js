import React from 'react'

export default class Todo extends React.Component {
  onStatusChange (e) {
  }
  render () {
    return (
      <li id={this.props.todo.id}>
        <div className="view">
          <input type="checkbox" name="status" className="toggle" defaultChecked={this.props.todo.status} onChange={this.onStatusChange.bind(this)}/>
          <input type="text" name="description" className="read-only" value={this.props.todo.description} title={this.props.todo.description} readOnly={this.props.readonly} />
          <button name="remove" className="destroy"></button>
        </div>
      </li>
    )
  }
}

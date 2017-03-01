import React from 'react'

export default class Todo extends React.Component {

  constructor (props) {
    super(props)
    this.state = { isEditing: false }
  }

  onStatusChange () {
    this.props.onTodoUpdate(this.props.todo, { id: this.props.todo.id, status: !this.props.todo.status, description: this.props.todo.description })
  }

  onEnterEdit (e) {
    this.setState({ isEditing: true })
  }

  onExitEdit () {
    this.setState({ isEditing: false })
  }

  updateDesciption (e) {
    this.onExitEdit()
    this.props.onTodoUpdate(this.props.todo, { id: this.props.todo.id, status: this.props.todo.status, description: e.target.value })
  }

  deleteTodo () {
    this.props.onTodoDelete(this.props.todo.id)
  }

  keyPressed (e) {
    if (e.keyCode === 13) {
      this.updateDesciption(e)
    }
    if (e.keyCode === 27) {
      e.target.value = this.props.todo.description
      this.onExitEdit()
    }
  }

  render () {
    let inputTextClass = 'read-only '
    if (this.state.isEditing) inputTextClass = 'edit'
    else {
      inputTextClass = this.props.todo.status ? inputTextClass + 'completed' : inputTextClass
    }
    return (
      <li id={this.props.todo.id}>
        <div className="view">
          <input
            type="checkbox"
            name="status"
            className="toggle"
            checked={this.props.todo.status}
            onChange={this.onStatusChange.bind(this)}
          />
          <input
            type="text"
            name="description"
            className={inputTextClass}
            onBlur={this.updateDesciption.bind(this)}
            defaultValue={this.props.todo.description}
            title={this.props.todo.description}
            readOnly={!this.state.isEditing}
            onDoubleClick={this.onEnterEdit.bind(this)}
            onKeyUp={this.keyPressed.bind(this)}
          />
          <button
            name="remove"
            className="destroy"
            onClick={this.deleteTodo.bind(this)}
          />
        </div>
      </li>
    )
  }
}

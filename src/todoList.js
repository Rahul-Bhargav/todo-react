import React from 'react'
import Todo from './todo'

export default class TodoList extends React.Component {

  render () {
    const todos = this.props.todos.map((todo) => {
      return <Todo
        key={todo.id}
        todo={todo}
        onTodoUpdate={this.props.onTodoUpdate}
        onTodoDelete={this.props.onTodoDelete}
      />
    })
    return (
      <section className="main" style={{ display: 'block' }}>
        <ul className="todo-list" id="todo-list">
          {todos}
        </ul>
      </section>
    )
  }
}

TodoList.defaultProps = {
  todos: []
}


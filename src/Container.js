import React from 'react'
import Header from './header'
import TodoList from './todoList'
import Footer from './footer'
import apiInterface from './apiInterface'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = { todos: [], showElements: false, currentLocation: '' }
    this.listType = {
      'All': () => this.state.todos,
      'Completed': () => this.state.todos.filter(todo => todo.status),
      'Active': () => this.state.todos.filter(todo => !todo.status)
    }
  }

  clearCompleted () {
    apiInterface.deleteCompleted()
      .then(() => {
        const updatedTodos = this.listType['Active']()
        this.setState({ todos: updatedTodos })
      })
  }

  onToggleAll (status) {
    apiInterface.updateAll(status)
      .then(() => {
        const updatedTodos = this.state.todos.map(todo => {
          todo.status = status
          return todo
        })
        this.setState({ todos: updatedTodos })
      })
  }
  onInsertTodo (description) {
    apiInterface.insertTask(description)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        const newTodo = { id: result[0].id, description, status: false }
        const updatedTodos = this.state.todos
        updatedTodos.push(newTodo)
        this.setState({ todos: updatedTodos })
        this.setShowElements()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onTodoDelete (id) {
    apiInterface.deleteTask(id)
      .then(() => {
        const updatedTodos = this.state.todos.filter(todo => !(todo.id === id))
        this.setState({ todos: updatedTodos })
        this.setShowElements()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updateTodoArray (todoArray, newTodo) {
    return todoArray.map(item => {
      if (item.id === newTodo.id) {
        item = newTodo
      }
      return item
    })
  }

  onTodoUpdate (oldTodo, newTodo) {
    // spread here
    apiInterface.updateTask(newTodo.id, newTodo.description, newTodo.status)
      .then(() => {
        const updatedTodos = this.updateTodoArray(this.state.todos, newTodo)
        this.setState({ todos: updatedTodos })
      })
      .catch((err) => {
        const updatedTodos = this.updateTodoArray(this.state.todos, oldTodo)
        this.setState({ todos: updatedTodos })
        console.log(err)
      })
  }

  setShowElements () {
    if (this.state.todos.length > 0) {
      if (!this.state.showElements) {
        this.setState({ showElements: true })
      }
    }
    if (this.state.todos.length <= 0) {
      if (this.state.showElements) {
        this.setState({ showElements: false })
      }
    }
  }

  getCompletedTodoCount () {
    return this.state.todos.filter(todo => !todo.status).length
  }

  render () {
    let location = this.props.params.location === undefined ? 'All' : this.props.params.location
    const todoToShow = this.listType[location]()
    const count = this.getCompletedTodoCount()
    return (
      <section className="todoapp">
        <Header
          onInsertTodo={this.onInsertTodo.bind(this)}
          showCheckAll={this.state.showElements}
          onToggleAll={this.onToggleAll.bind(this)}
        />
        <TodoList
          todos={todoToShow}
          onTodoUpdate={this.onTodoUpdate.bind(this)}
          onTodoDelete={this.onTodoDelete.bind(this)}
        />
        <Footer
          todoCount={count}
          clearCompleted={this.clearCompleted.bind(this)}
          showFooter={this.state.showElements}
        />
      </section>
    )
  }

  componentDidMount () {
    apiInterface.readTasks()
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        this.setState({ todos: result })
        this.setShowElements()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

import React from 'react'
import Header from './header'
import TodoList from './todoList'
import Footer from './footer'
import apiInterface from './apiInterface'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <section className="todoapp">
        <Header />
        <TodoList todos={this.state.todos}/>
        <Footer />
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
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

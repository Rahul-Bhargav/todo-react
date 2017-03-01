import Container from './Container'
import React from 'react'

const App = (props) => {
  return (
    <div className="app">
      <header>
        <h1>todos</h1>
      </header>
      <Container params={props.params}/>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by TodoMVC</p>
        <p>Copied by Rahul</p>
      </footer>
    </div>
  )
}
export default App

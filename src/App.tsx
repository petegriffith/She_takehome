import React from 'react'

import Header from './components/Header'
import SingleTodo from './components/SingleTodo'
import TodoInput from './components/TodoInput'

import './styles/App.css'

function App() {
  const todos = ['Buy Milk', 'Drink Milk', 'Buy More Milk']

  return (
    <>
      <Header />
      <div className="App_inner-container">
        <TodoInput />
        <div className="App_todos_container">
            {todos.map((todo) => <SingleTodo todoName={todo} />)}
        </div>
      </div>
    </>
  )
}

export default App

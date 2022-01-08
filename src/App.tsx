import React, { useState } from 'react'

import Header from './components/Header'
import SingleTodo from './components/SingleTodo'
import TodoInput from './components/TodoInput'

import './styles/App.css'

function App() {
  let data: TodoList = [
    {
      id: 1,
      task: 'Buy Milk',
      completed: false,
    },
    {
      id: 2,
      task: 'Drink Milk',
      completed: false,
    },
    {
      id: 3,
      task: 'Buy More Milk',
      completed: false,
    },
    { id: 4, 
      task: 'Give milk to mouse', 
      completed: false },
  ]
  const [currentTodos, setCurrentTodos] = useState(data)

  const handleDeleteTodo = (idToDelete: number): void => {
    console.log(idToDelete)
    const filteredTodos = currentTodos.filter((todo) => todo.id !== idToDelete)
    console.log(filteredTodos)
    setCurrentTodos(filteredTodos)
  }

  return (
    <>
      <Header />
      <div className="App_inner-container">
        <TodoInput />
        <div className="App_todos-container">
          {currentTodos.map((todo, index) => (
            <SingleTodo todo={todo} key={index} deleteTodo={handleDeleteTodo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react'

import Header from './components/Header'
import SingleTodo from './components/SingleTodo'
import TodoInput from './components/TodoInput'

import './styles/App.css'

function App() {
  let data: TodoList = [
    {
      task: 'Buy Milk',
      completed: true,
    },
    {
      task: 'Drink Milk',
      completed: false,
    },
    {
      task: 'Buy More Milk',
      completed: false,
    },
    { task: 'Give milk to mouse', completed: false },
  ]
  const [currentTodos, setCurrentTodos] = useState(data)

  const handleDeleteTodo = (indexToDelete: number): void => {
    setCurrentTodos(currentTodos.filter((todo, index) => index !== indexToDelete))
  }

  const handleEditTodo = (indexToEdit: number, newTask: string): void => {
    const newTodos = [...currentTodos]
    newTodos[indexToEdit].task = newTask
    setCurrentTodos(newTodos)
  }

  return (
    <>
      <Header />
      <div className="App_inner-container">
        <TodoInput />
        <div className="App_todos-container">
          {currentTodos.map((todo, index) => (
            <SingleTodo todo={todo} index={index} key={index} deleteTodo={handleDeleteTodo} editTodo={handleEditTodo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App

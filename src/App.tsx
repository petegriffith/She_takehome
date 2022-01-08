import React, {useState} from 'react'

import Header from './components/Header'
import SingleTodo from './components/SingleTodo'
import TodoInput from './components/TodoInput'

import './styles/App.css'

import data from './assets/initData.json'

function App() {
  const [currentTodos, setCurrentTodos] = useState(data)

  return (
    <>
      <Header />
      <div className="App_inner-container">
        <TodoInput />
        <div className="App_todos-container">
          {currentTodos.map((todo, index) => <SingleTodo todo={todo} />)}
        </div>
      </div>
    </>
  )
}

export default App

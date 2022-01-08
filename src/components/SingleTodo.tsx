import React from 'react'

import '../styles/SingleTodo.css'
import '../styles/_flex.css'

interface Todo {
  task: string
  completed: boolean
}

function SingleTodo({ todo }: { todo: Todo }) {
  return (
    <div className="_flex-row todo-container">
      <div className="_flex-row">
        <input type="checkbox" />
        <p>{todo.task}</p>
      </div>
      <div className="_flex-row button-container">
        <div className="button delete-button">Delete</div>
        <div className="button edit-button">Edit</div>
      </div>
    </div>
  )
}

export default SingleTodo

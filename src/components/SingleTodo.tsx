import React from 'react'

import '../styles/SingleTodo.css'
import '../styles/_flex.css'



function SingleTodo({ todo, index, deleteTodo }: { todo: Todo, index: number, deleteTodo: (index: number) => void }) {
  return (
    <div className="_flex-row todo-container">
      <div className="_flex-row">
        <input type="checkbox" />
        <p className={todo.completed ? 'strikethrough' : ''}>{todo.task}</p>
      </div>
      <div className="_flex-row button-container">
        <div role="button" onClick={() => console.log('editting')} className="button edit-button">Edit</div>
        <div role="button" onClick={() => deleteTodo(index)} className="button delete-button">Delete</div>
      </div>
    </div>
  )
}

export default SingleTodo

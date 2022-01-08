import React, { useState } from 'react'

import '../styles/SingleTodo.css'
import '../styles/_flex.css'

function SingleTodo({ todo, index, deleteTodo, editTodo }: { todo: Todo; index: number; deleteTodo: (index: number) => void; editTodo: (index: number, edittedTask: string) => void }) {
  const [todoTask, setTodoTask] = useState(todo.task)
  const [isEditting, toggleIsEditting] = useState(false)

  const handleDeleteTodoClick = () => deleteTodo(index)
  
  const handleEditTodoClick = () => {
    if (isEditting === true) toggleIsEditting(false)
    else toggleIsEditting(true)
  }

  const handleEnterClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleIsEditting(false)
    }
  }

  const taskInput = <input type="text" value={todoTask} onChange={(event) => setTodoTask(event.target.value)} onKeyDown={handleEnterClick} />
  const taskName = <p className={todo.completed ? 'strikethrough' : ''}>{todoTask}</p>

  return (
    <div className="_flex-row todo-container">
      <div className="_flex-row">
        <input type="checkbox" />
        {isEditting ? taskInput : taskName}
      </div>
      <div className="_flex-row button-container">
        <div role="button" onClick={handleEditTodoClick} className="button edit-button">
          {!isEditting ? 'Edit' : 'Cancel'}
        </div>
        <div role="button" onClick={handleDeleteTodoClick} className="button delete-button">
          Delete
        </div>
      </div>
    </div>
  )
}

export default SingleTodo

import React, { useState } from 'react'

import '../styles/SingleTodo.css'
import '../styles/_flex.css'

function SingleTodo({ todo, deleteTodo, editTodo }: { todo: Todo; deleteTodo: (id: number) => void; editTodo: (id: number, edittedTask: string) => void}) {
  const [todoTask, setTodoTask] = useState(todo.task)
  const [isEditting, toggleIsEditting] = useState(false)

  const handleDeleteTodoClick = () => deleteTodo(todo.id)
  
  const handleEditTodoClick = () => {
    if (isEditting === true) toggleIsEditting(false)
    else toggleIsEditting(true)
  }

  const handleEnterClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleIsEditting(false)
      editTodo(todo.id, todoTask)
    }
  }

  const taskInput = <input type="text" value={todoTask} onChange={(event) => setTodoTask(event.target.value)} onKeyDown={handleEnterClick} />
  const taskName = <p className={todo.completed ? 'strikethrough' : ''}>{todo.task}</p>

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

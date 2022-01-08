import React from 'react'

import '../styles/TodoInput.css'

function TodoInput() {
  return (
    <div className="TodoInput_container">
      <input type="text" className="TodoInput_input" />
      <div role="button" className="TodoInput_button">Add</div>
    </div>
  )
}

export default TodoInput
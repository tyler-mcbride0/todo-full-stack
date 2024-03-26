import React, { useState } from 'react'

function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (e: React.ChangeEvent) => {
    setNewTodo(e.target.value)
    console.log(newTodo)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(newTodo)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onChange={handleChange}
          value={newTodo}
        />
      </form>
    </>
  )
}

export default AddTodo

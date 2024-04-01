import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addTodo } from '../apis/apiclient'

function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (input) => addTodo(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleChange = (e: React.ChangeEvent) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ task: newTodo })
    setNewTodo('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={newTodo}
          aria-label="Add new todo"
        />
      </form>
    </>
  )
}

export default AddTodo

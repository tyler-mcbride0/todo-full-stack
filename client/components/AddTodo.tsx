import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addTodo } from '../apis/apiclient'

function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newTodo) => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleChange = (e: React.ChangeEvent) => {
    setNewTodo(e.target.value)
    console.log(newTodo)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ name: newTodo })
    setNewTodo('')
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

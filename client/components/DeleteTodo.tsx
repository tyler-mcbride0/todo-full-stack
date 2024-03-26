import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { removeTodo } from '../apis/apiclient'

function DeleteTodo() {
  const [deleteTodo, setDeleteTodo] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (input) => removeTodo(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleChange = (e: React.ChangeEvent) => {
    setDeleteTodo(e.target.value)
    console.log(deleteTodo)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ id: deleteTodo })
    setDeleteTodo('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be deleted?"
          onChange={handleChange}
          value={deleteTodo}
        />
      </form>
    </>
  )
}

export default DeleteTodo

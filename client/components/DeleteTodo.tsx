import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { removeTodo } from '../apis/apiclient'
import { Id } from '../../models/todos'

function DeleteTodo() {
  const [deleteTodo, setDeleteTodo] = useState('')
  const [placeholder, setPlaceholder] = useState('What needs to be deleted?')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (input: Id) => removeTodo(input),
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
    const submit = Number(deleteTodo)
    if (!isNaN(submit)) {
      mutation.mutate({ id: submit })
      setDeleteTodo('')
      setPlaceholder('What needs to be deleted?')
    } else {
      setDeleteTodo('')
      setPlaceholder('You have not submitted a number')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder={placeholder}
          onChange={handleChange}
          value={deleteTodo}
        />
      </form>
    </>
  )
}

export default DeleteTodo

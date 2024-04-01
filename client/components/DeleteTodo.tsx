import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { removeTodo } from '../apis/apiclient'
import { Id, TodoParams } from '../../models/todos'

function DeleteTodo(params: TodoParams) {
  const todo = params.todo

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => removeTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(todo.id)
    mutation.mutate()
  }

  return (
    <>
      <td>
        <button onClick={handleClick}>❌</button>
      </td>
    </>
  )
}

export default DeleteTodo

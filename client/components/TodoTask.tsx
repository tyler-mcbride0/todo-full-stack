import { TodoParams } from '../../models/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editTodoName, updateTodoPriority } from '../apis/apiclient'
import { useState } from 'react'
import e from 'express'

export function TodoTask(params: TodoParams) {
  const [edit, setEdit] = useState(false)
  const [editedTask, setEditedTask] = useState('')

  const todo = params.todo

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newName) => editTodoName(todo.id, newName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      setEdit(false)
    },
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEdit(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate({ name: editedTask })
    setEditedTask('')
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value)
  }

  return (
    <>
      <td className="table-task">
        <div className="taskParent">
          {edit == false ? (
            <div className="flexyTask">{todo.task}</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label
                id={`${todo.id}`}
                htmlFor="editingtodoname"
                className="hidden"
              >
                Edit Task Name
              </label>
              <input
                placeholder={todo.task}
                value={editedTask}
                onChange={handleChange}
                aria-labelledby={`${todo.id}`}
              ></input>
            </form>
          )}

          <div className="flexyButton">
            <button className="edit" onClick={handleClick}>
              🖊
            </button>
          </div>
        </div>
      </td>
    </>
  )
}

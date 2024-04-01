import { TodoParams } from '../../models/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeActiveStatus } from '../apis/apiclient'

export function TodoActive(params: TodoParams) {
  const todo = params.todo
  const newState = { state: todo.is_active == true ? 0 : 1 }

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => changeActiveStatus(todo.id, newState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleDoubleClick = () => {
    mutation.mutate()
  }

  return (
    <>
      <td className="table-status" onDoubleClick={handleDoubleClick}>
        {todo.is_active == true ? '✔' : '✖'}
      </td>
    </>
  )
}

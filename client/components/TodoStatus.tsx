import { TodoParams } from '../../models/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeCompleteStatus } from '../apis/apiclient'

export function TodoStatus(params: TodoParams) {
  const todo = params.todo
  const newState = { state: todo.is_complete == true ? 0 : 1 }

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => changeCompleteStatus(todo.id, newState),
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
        {todo.is_complete == true ? '✔' : '✖'}
      </td>
    </>
  )
}

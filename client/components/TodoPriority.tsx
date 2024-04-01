import { TodoParams } from '../../models/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTodoPriority } from '../apis/apiclient'

export function TodoPriority(params: TodoParams) {
  const todo = params.todo

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newPriority) => updateTodoPriority(todo.id, newPriority),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newPriority = { state: Number(event.target.value) }
    console.log(newPriority)
    mutation.mutate(newPriority)
  }

  return (
    <>
      <td className="table-priority">
        <label htmlFor={`${todo.id}`}>
          <select
            id={`${todo.id}`}
            value={todo.priority}
            onChange={handlePriorityChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </label>
      </td>
    </>
  )
}

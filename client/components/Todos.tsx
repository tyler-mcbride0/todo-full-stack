import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../apis/apiclient'

export default function Todos() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
  })

  if (isPending) {
    return <>Loading...</>
  }

  if (isError) {
    return <>Oops! there was an error</>
  }

  const todos = data

  return (
    <div>
      <h2>TODO LIST</h2>
      <table className="todos-list">
        <thead>
          <tr>
            <th className="table-task">Task</th>
            <th className="table-priority">Priority</th>
            <th className="table-status">Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="table-task">{todo.task}</td>
              <td className="table-priority">{todo.priority}</td>
              <td className="table-status">Status: </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

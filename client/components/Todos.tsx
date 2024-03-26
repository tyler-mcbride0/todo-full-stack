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

  const handleDoubleClick = (e) => {
    console.log('doubleclicked', e)
  }

  return (
    <div>
      <h2>TODO LIST</h2>
      <table className="todos-list">
        <thead>
          <tr>
            <th>ID</th>
            <th className="heading-task">Task</th>
            <th className="heading-priority">Priority</th>
            <th className="heading-status">Status</th>
            <th className="heading-status">Active</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr onDoubleClick={handleDoubleClick} key={todo.id}>
              <td>{todo.id}</td>
              <td className="table-task">{todo.task}</td>
              <td className="table-priority">{todo.priority}</td>
              <td className="table-status">
                {todo.is_completed === false ? '✔' : '❌'}
              </td>
              <td className="table-status">
                {todo.is_active === false ? '✔' : '❌'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

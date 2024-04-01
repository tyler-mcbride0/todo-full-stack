import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../apis/apiclient'
import { TodoActive } from './TodoActive'
import { TodoStatus } from './TodoStatus'
import { TodoPriority } from './TodoPriority'
import { TodoTask } from './TodoTask'
import DeleteTodo from './DeleteTodo'

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
        <caption>Doubleclick the Active/Status fields to change</caption>
        <thead>
          <tr>
            <th>Del</th>
            <th className="heading-task">Task</th>
            <th className="heading-priority">Priority</th>
            <th className="heading-status">Active</th>
            <th className="heading-status">Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <DeleteTodo todo={todo} />
              <TodoTask todo={todo} />
              <TodoPriority todo={todo} />
              <TodoActive todo={todo} />
              <TodoStatus todo={todo} />
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  )
}

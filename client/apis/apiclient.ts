import request from 'superagent'
import { Id, Todo } from '../../models/todos'

const rootURL = '/api/v1/todos'

export async function fetchTodos(): Promise<Todo[]> {
  const res = await request.get(rootURL)
  return res.body
}

export async function addTodo(newTodo: string) {
  console.log(newTodo)
  const res = await request.post(rootURL).send(newTodo)
  return res.body
}

export async function removeTodo(params: Id) {
  const res = await request.delete(`${rootURL}/${params.id}`)
  return res.body
}

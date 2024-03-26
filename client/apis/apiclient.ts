import request from 'superagent'
import { Todo } from '../../models/todos'

const rootURL = '/api/v1/todos'

export async function fetchTodos(): Promise<Todo[]> {
  const res = await request.get(rootURL)
  return res.body
}

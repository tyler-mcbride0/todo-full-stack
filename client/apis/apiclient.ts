import request from 'superagent'
import { Id, Todo } from '../../models/todos'

const rootURL = '/api/v1/todos'

export async function fetchTodos(): Promise<Todo[]> {
  console.log('i got called')
  const res = await request.get(rootURL)

  return res.body
}

export async function addTodo(newTodo: string) {
  const res = await request.post(rootURL).send(newTodo)
  return res.body
}

export async function removeTodo(id: number) {
  const res = await request.delete(`${rootURL}/${id}`)
  return res.body
}

export async function changeActiveStatus(id: number, newState) {
  const res = await request.patch(`${rootURL}/active/${id}`).send(newState)
  return res.body
}

export async function changeCompleteStatus(id: number, newState) {
  const res = await request.patch(`${rootURL}/status/${id}`).send(newState)
  return res.body
}

export async function updateTodoPriority(id: number, newPriority) {
  const res = await request.patch(`${rootURL}/priority/${id}`).send(newPriority)
  return res.body
}

export async function editTodoName(id: number, newName) {
  const res = await request.patch(`${rootURL}/task/${id}`).send(newName)
  return res.body
}

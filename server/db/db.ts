import connection from './connection'
import { Todo } from '../../models/todos'

const db = connection

export function getTodos(): Promise<Todo[]> {
  return db('todos').select()
}

export function getTodoById(id: number): Promise<Todo> {
  return db('todos').where({ id }).select().first()
}

export function makeTodo(newTodoObj: Todo) {
  return db('todos').insert(newTodoObj)
}

export function removeTodo(id: number) {
  return db('todos').where({ id }).del()
}

export function markComplete(id: number) {
  return db('todos').where({ id }).update({ is_complete: 1 })
}

export function markIncomplete(id: number) {
  return db('todos').where({ id }).update({ is_complete: 0 })
}

export function markActive(id: number) {
  return db('todos').where({ id }).update({ is_active: 1 })
}

export function markInactive(id: number) {
  return db('todos').where({ id }).update({ is_active: 0 })
}

export function changePriorty(id: number, priority: number) {
  return db('todos').where({ id }).update({ priority })
}

export function changeName(id: number, task: string) {
  return db('todos').where({ id }).update({ task })
}

export function getActive(): Promise<Todo[]> {
  return db('todos').where('is_active', 1)
}

export function getInactive(): Promise<Todo[]> {
  return db('todos').where('is_active', 0)
}

export function getComplete(): Promise<Todo[]> {
  return db('todos').where('is_complete', 1)
}

export function getIncomplete(): Promise<Todo[]> {
  return db('todos').where('is_complete', 0)
}

export function getPriority(priority: number): Promise<Todo[]> {
  return db('todos').where({ priority })
}

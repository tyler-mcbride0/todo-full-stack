export interface Todo {
  id: number
  task: string
  is_active: boolean
  is_complete: boolean
  priority: number
}

export interface Id {
  id: number
}

export interface TodoParams {
  todo: Todo
}

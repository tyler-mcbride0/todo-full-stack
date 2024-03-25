import { Router } from 'express'
import * as db from '../db/db'

const router = Router()

// GET /api/v1/todos

router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.json(todos)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// GET /api/v1/todos/:id

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const todo = await db.getTodoById(id)
    res.json(todo)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// POST /api/v1/todos

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await db.makeTodo(newTodo)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

// DELETE /api/v1/todos

router.delete('/:id', async (req, res)=> {
  const id = Number(req.params.id)
  try{
    await db.removeTodo(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router

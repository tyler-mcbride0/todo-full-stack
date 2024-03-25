/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'shopping', priority: 1 },
    { id: 2, task: 'lunch', priority: 3 },
    { id: 3, task: 'smile', priority: 2 },
    { id: 4, task: 'vacuuming', priority: 4 },
    {
      id: 5,
      task: 'check in with a fried',
      priority: 2,
    },
  ])
}

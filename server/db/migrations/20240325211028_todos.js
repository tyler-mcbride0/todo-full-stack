/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments()
    table.string('task')
    table.boolean('is_complete').defaultTo(0)
    table.boolean('is_active').defaultTo(0)
    table.enu('priority', [1, 2, 3, 4]).notNullable().defaultTo(4)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('todos')
}

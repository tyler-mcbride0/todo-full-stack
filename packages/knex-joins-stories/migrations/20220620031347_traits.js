exports.up = function (knex) {
  return knex.schema.createTable('traits', function (table) {
    table.increments('id').primary()
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('traits')
}

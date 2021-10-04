
exports.up = function(knex) {
  return knex.schema.createTable('sender', table => {
    table.increments('id')
    table.string('username')
    table.string('password')
    table.string('email')
    table.integer('recipient_id')
    table.string('gift_Id')
    table.string('address')

  })
};
exports.down = function(knex) {
  return knex.schema.dropTable('sender')
  
};

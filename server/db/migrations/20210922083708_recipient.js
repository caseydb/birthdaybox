
exports.up = function(knex) {
  return knex.schema.createTable('recipient', table => {
    table.increments('id')
    table.string('name')
    table.string('birthdate')
    table.string('gift_Id')
    table.string('address')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipient')
};

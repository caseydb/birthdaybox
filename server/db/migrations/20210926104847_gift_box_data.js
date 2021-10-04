exports.up = function(knex) {
  return knex.schema.createTable('gift_box_data', table => {
    table.increments('id')
    table.string('giftItem')
    table.integer('giftPrice')
    table.string('image')
    table.string('description')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('gift_box_data')
};
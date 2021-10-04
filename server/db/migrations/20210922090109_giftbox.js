
exports.up = function(knex) {
    return knex.schema.createTable('giftbox', table => {
        table.increments('id')
        table.string('giftItem')
        table.integer('giftPrice')
        table.string('image')
      })
    };

exports.down = function(knex) {
    return knex.schema.dropTable('giftbox')
};

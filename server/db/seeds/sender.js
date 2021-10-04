exports.seed = knex =>
knex('sender').del()
.then(() => 
    knex('sender').insert([
        {id: 1, username: 'Barry K', password:'123jkl', email: 'barryk@gmail.com', recipient_id: 5, gift_Id: '8', address: '10 Fork Road, Lyall Bay, Wellington, NZ'},
        {id: 2, username: 'Julia P', password:'JJ909', email: 'juliap@gmail.com', recipient_id: 6, gift_Id: '9', address: '55 Derwent Road, Newtown, Wellington, NZ'},
        {id: 3, username: 'Karen L', password:'*asdk8', email: 'karenl@gmail.com', recipient_id: 7, gift_Id: '10', address: '70 Rimu Road, Newlands, Wellington, NZ'},
      ]))

exports.seed = knex =>
knex('recipient').del()
.then(() => 
    knex('recipient').insert([
        {id: 1, name: 'Balto', birthdate:'2014-10-12', gift_Id: '1', address: '55 Duncan Terrace, Kilbirnie, Wellington'},
        {id: 2, name: 'Sam Z', birthdate:'1950-10-27', gift_Id: '3', address: '40 Columba Avenue, Calton Hill, Dunedin'},
        {id: 3, name: 'Rose M', birthdate:'2020-11-10', gift_Id: '4', address: '79 Devon Street East, New Plymouth'}, 
        {id: 4, name: 'Kelly W', birthdate:'1999-12-25', gift_Id: '2', address: '5 Melbourne Road, Island Bay, Wellington'},
      ]))

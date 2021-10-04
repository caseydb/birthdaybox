exports.seed = knex =>
knex('giftbox').del()
.then(() => 
    knex('giftbox').insert([
        {id: 1, giftItem: 'box1', giftPrice: 99, image: '/box1.png'},
        {id: 2, giftItem: 'box2', giftPrice: 75, image: '/box2.png'},
        {id: 3, giftItem: 'box3', giftPrice: 100, image: '/box3.png'},
      ]))
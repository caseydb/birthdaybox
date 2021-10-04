
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('gift_box_data').del()
    .then(() =>
      // Inserts seed entries
      knex('gift_box_data').insert([
        {
          id: 1,
          giftItem: 'Box 1',
          giftPrice: 55,
          image: 'box1item1.jpg',
          description: "Pinot Noir, chocolate, spicy fudge, Six Barrel Soda, Mulled Wine Syrup, Tea Thief Tea"
        }, {
          id: 2,
          giftItem: 'Box 2',
          giftPrice: 85,
          image: 'box2item2.jpg',
          description: "Send a little bit of happiness: Six Barell Soda, chocolate, chocolate almonds, crackers"
        }, {
          id: 3, 
          giftItem: 'Box 3',
          giftPrice: 100, 
          image: 'box3item3.jpg',
          description: "Egmont Raw Honey, emacadamia nuts, Giles Chocolatier Tablette de Chocolat, Okurukuru Red Wine, Sids sauces and Oils, Mister K Crackers"
        }, {
          id: 4, 
          giftItem: 'Box 4',
          giftPrice: 250, 
          image: 'box4item4.jpg',
          description: "Our biggest gift box to date. Make a statement with our Wellington Region Extra Large Gift Box filled with local products from Wellington, Kāpiti and Wairarapa."
        }, {
          id: 5, 
          giftItem: 'Box 5',
          giftPrice: 70, 
          image: 'box5item5.jpg',
          description: "J.M.R Cocktail large bottle, Mamia’s cooking sauce, Apostle Hot Sauce, Arobake toffee biscuits, Baron Hasselhoff’s Brittle, Fix & Fogg peanut butter, Superseed Salad Toppers, Wellington Chocolate Factory"
        }, {
          id: 6, 
          giftItem: 'Box 6',
          giftPrice: 89, 
          image: 'box6item6.jpg',
          description: "Apostle Hot Sauce, Arobake toffee biscuits, Baron Hasselhoff’s Brittle, Fix & Fogg peanut butter, Garage Project Pas De Deux, Grafter’s Honey, Mamia’s cooking sauce, Superseed Salad Toppers"

        } , {
          id: 7, 
          giftItem: 'Box 7',
          giftPrice: 70, 
          image: 'box7item7.jpg',
          description: 'Apostle Hot Sauce, Baron Hasselhoff’s Brittle, Beer Belly Jelly, Fix & Fogg peanut butter, Garage Project beer, Grafter’s Honey'
        } , {
          id: 8, 
          giftItem: 'Box 8',
          giftPrice: 55, 
          image: 'box8item8.jpg',
          description: "Fig & Fogg peanut butter, Superseed Salad Toppers, Wellington Chocolate Factory, Six Barrel Soda, Grafter's Honey, Baron Hasselhoff’s Brittle "
        }
      ]))

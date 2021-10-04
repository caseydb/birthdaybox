import ProductItem from './ProductItem';
import React from 'react';

const DUMMY_PRODUCTS = [
  {id: 'p1', price: 25, title: 'Shabu\'s book', description: 'book 1'},
  {id: 'p2', price: 25, title: 'Anand\'s book', description: 'book 2'},
  {id: 'p3', price: 25, title: 'Juliet\'s book', description: 'book 3'},
  {id: 'p4', price: 25, title: 'Alex\'s book', description: 'book 4'},
  {id: 'p5', price: 25, title: 'Casey\'s book', description: 'book 5'}

]

const Products = (props) => {
  return (
    <section>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
                  <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
        ))}

      </ul>
    </section>
  );
};

export default Products;

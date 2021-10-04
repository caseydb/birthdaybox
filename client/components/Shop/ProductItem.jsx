import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import React from 'react'

const ProductItem = (props) => {

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    })
    )
  }
  const { title, price, description, id } = props;

  return (
    <li >
      <Card>
        <header>
          <h3>{title}</h3>
          <div >${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

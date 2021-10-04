import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/counter';
import React from 'react'


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const toggle = useSelector(state => state.counter.showCounter)
  
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }
  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter())
  }
  
  return (
    <main>
      <h1>Roa 2021</h1>
      {toggle && 
      <div>
        <div>{counter}</div>
        <div>
          <button onClick={incrementHandler}>increment</button>
          <button onClick={increaseHandler}>increase by 10</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      </div>}
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
    
  );
};

export default Counter;

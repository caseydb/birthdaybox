import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, updateQuantities } from '../actions/cart'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'


function Cart(props) {
  const { dispatch, cart } = props
  //console.log("Cart", cart)

  const [ newCart, setNewCart ] = useState(cart)

  const history = useHistory()

  const [ updateCart, setUpdateCart ] = useState(cart)

    useEffect(()=> {
      //console.log('cart ', cart)
      if(cart.totalPrice){
        setNewCart(cart)
      }
    }, [cart])


  const [ totalPrice , setTotalPrice] = useState(0)
  const [ totalItem , setTotalItem] = useState(0)
    
    // useEffect(()=> {
      let items = 0
      let price = 0
  
      cart.forEach(item => {
        items += item.quantity
        price += Number(item.quantity)* Number(item.giftPrice)
      })

      console.log('price ', price)
    //   setTotalPrice(price)
    //   setTotalItem(items)

    // },[cart, totalPrice, totalItem, setTotalPrice, setTotalItem])


  function updateHandler() {
    dispatch(updateQuantities(updateCart))
  }

  function getQuantity(id) {
    return updateCart.find(item => item.id === id).quantity //returning a number OR code below
    //   var itemQuantity = (updateCart.find(item => {
    //         if(item.id === id){
    //             return item
    //         }
    //   })).quantity
    //   //console.log("item ", itemQuantity)
    //   return itemQuantity
  }


  function changeHandler (e, id) {
        setUpdateCart(updateCart.map(updateItem => {
            if(updateItem.id === id) {
                return {...updateItem, giftPrice:(Number(updateItem.giftPrice)* e.target.value) , quantity: e.target.value} // setting new value
            } else{
                return {...updateItem}
            }
        }))
  }

  function continueHandler() {
    history.push('/gifts') //redirecting to giftbox
  }

  function checkoutHandler (){
    history.push('/checkout')
  }

  function removeHandler(id) {
    dispatch(removeFromCart(id))
  }



  return (
    <>
      <div className="cart-wrapper">
        <div className='cart-heading'>
          <h1 className='cart-title'>My Shopping Cart</h1>
          <div className='button-wrapper'>
            <button onClick={continueHandler} className="continue-button">Continue Shopping</button>
          </div>
        </div>
        <div className="cart-body"></div>
        <table>
            <thead>
              <tr>
                <td className="td-header-text">Giftbox</td>
                <td className="td-header-text">Quantity</td>
                <td className="td-header-text">Price</td>
                <td className="td-header-text">Update</td>
              </tr>
            </thead>
            <tbody>
            {cart.length === 0 && <tr><td colSpan="4"> 🛒 Your Cart is Currently Empty!</td></tr>}
           {cart?.map(({ id, giftItem, totalPrice }) => {
            //  console.log("totalPrice ", totalPrice)
             return (
              <tr key={id}>
                <td>{giftItem}</td>
                <td><input className='update-input' type="number" value={getQuantity(id)} onChange={(e) => { changeHandler(e, id) }} /></td>
                <td>{`$${totalPrice}`}</td> 
                <td><img className="icon-update" src="/images/refresh-icon.png" alt="refresh icon" onClick={updateHandler} /><img className="icon-update" src="/images/delete-icon.png" alt="delete icon" onClick={() => removeHandler(id)} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="cart-totals-container">
            <div>
            <div className="cart-totals">
              <div className="cart-totals-text">
                <p>Subtotal</p>
                <p>Free shipping</p>
                <p>GST</p>
                <p className="total">Total</p>
              </div>
              <div className="cart-totals-prices">
                <p>${price}</p>
                <p>Free</p>
                <p>15%</p>
                <p className="total">${Math.round(price*1.15)}</p>
              </div>
            </div>
            <button className="submit-Button" onClick={checkoutHandler}>Proceed to checkout</button>
            </div>
          </div>
      </div>
    </>
)}



function mapStateToProps(globalState) {
    return {
      cart: globalState.cart
    }
  }




export default connect(mapStateToProps)(Cart)
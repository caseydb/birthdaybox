import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


function GiftBoxListItem(props) {
  //console.log('props:' , props)
  const { dispatch, gift } = props
  //console.log("gift " , gift)
  const { loginWithRedirect, isAuthenticated } = useAuth0();


  const history = useHistory()

  function addGiftBoxHandler() {
    dispatch(addToCart(gift))
    history.push('/cart') //redirecting to cart page 
  }
  // function loginhandler() {
  //   history.push({loginWithRedirect}) //redirecting to cart page 
  // }
  

  const { id, giftItem, giftPrice, image, description } = gift

  //console.log("gift: ", gift)

  return (
    <>
        <div className="wrapper">
          <div className="product-img">
            <img src={`/images/${image}`} alt="gift box"/>
          </div>
          <div className="product-info">
            <div className="product-text">
            <h1>{giftItem}</h1>
            <h2>treats for birthday's</h2>
            <p>{description}</p>
            <div className="product-price-btn">
              {/* <p className='giftPrice'><span>{`NZD $${giftPrice}`}</span></p> */}
              <p ><span>${giftPrice}</span></p>

              {isAuthenticated && <button onClick={addGiftBoxHandler} className='cart-link' className='product-price-btn'>Add to cart</button>}
              {!isAuthenticated && <button className='product-price-btn' onClick={() => loginWithRedirect()}>Add to cart</button>}
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    cart: globalState.cart
  }

}



export default connect(mapStateToProps)(GiftBoxListItem)
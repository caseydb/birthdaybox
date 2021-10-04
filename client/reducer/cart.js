import { ADD_TO_CART } from '../actions/cart'
import { REMOVE_FROM_CART } from '../actions/cart'
import { UPDATE_QUANTITIES } from '../actions/cart'


export default function cartReducer (state = [], action) {
    switch(action.type) {
        case ADD_TO_CART:
            return cartAdd( state, action.gift)
        case REMOVE_FROM_CART:
            const newCartArr = state.filter(cartItem => cartItem.id !== action.id) 
            return newCartArr
            // OR if(cartItem.id !== action.id){
            //     return cartItem
            // }
        case UPDATE_QUANTITIES:
            return state.map(item => {
              //console.log(action.cart)

                const itemFound = action.cart.find(cartItem => {
                  //console.log("cartItem ", cartItem)
                  
                    if(cartItem.id === item.id){
                     return cartItem }
                    })
                    //console.log("item,", itemFound)
                //console.log("quantity ", updateQuantity)
                //if copying the item and if itemFound is truthy then grab the 
                //number in itemFound and stored in quantity eg, quantity: 2 / else set initial quantity
                const qty = {quantity: itemFound ? itemFound.quantity : item.quantity}
                const price = {price: Number(qty.quantity)*item.giftPrice} 
                const subtotal = {subtotal:1} 
                const sub = subtotal.subtotal + price.price
                return {...item, quantity: qty.quantity, totalPrice: price.price, subtotal:sub}
                // return {...item, quantity: itemFound ? itemFound.quantity : item.quantity}

            })
        
        default: 
        return state
    }
}

const cartAdd = (state, {id, giftItem, giftPrice, subtotal}) => {
        const isInCart = state.filter(cartItem => cartItem.id === id)

        if (isInCart.length >= 1) {
          // if it is, add one to qty
          const newCart = state.map(cartItem => {
            if (cartItem.id === id) {
              cartItem.quantity += 1
              cartItem.totalPrice = cartItem.quantity*cartItem.giftPrice
              cartItem.subtotal = cartItem.subtotal + cartItem.totalPrice
              //console.log('cartItem.totalPrice ', cartItem.totalPrice)
              //console.log('cart item ', cartItem)
              return cartItem
            } else {
              return cartItem
            }
          })
          return newCart // returning new array of cart
        } else {
          // if not just add it to state
          return [...state, { id, giftItem, giftPrice, quantity: 1, totalPrice:giftPrice, subtotal }] // returing new obj with quantity 1 {id:id, giftName:giftName, quantity:1n}
        }
      }



export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const UPDATE_QUANTITIES = "UPDATE_QUANTITIES"

//ACTION CREATOR

export function addToCart (gift) {
  return {
      type:ADD_TO_CART,
      gift
  }  
}

export function removeFromCart (id) {
    return {
        type:REMOVE_FROM_CART,
        id
    }  
  }

export function updateQuantities (cart) {
  return {
    type:UPDATE_QUANTITIES,
    cart
  }
}

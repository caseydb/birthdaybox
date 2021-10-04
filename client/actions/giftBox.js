import { fetchAllGiftBoxes, addGiftBoxToCart, deleteGiftBoxFromCart } from '../apis/giftBoxApi'


export const SHOW_ALL_GIFTBOXES = 'SHOW_ALL_GIFTBOXES'
export const ADD_GIFTBOXES_TO_CART = 'ADD_GIFTBOXES_TO_CART'
export const DELETE_GIFTBOXES_FROM_CART = 'DELETE_GIFTBOXES_FROM_CART'


// ACTION CREATORS

function showAllGiftBoxesAction(giftBoxes) {
  return {
    type: SHOW_ALL_GIFTBOXES,
    giftBoxes
  }
}


function addGiftBoxAction(giftItem) {
  return {
    type: ADD_GIFTBOXES_TO_CART,
    id: giftItem.id,
    price: giftItem.giftPrice
    }
}

function deleteGiftBoxAction(id){
  return {
    type: DELETE_GIFTBOXES_FROM_CART,
    id
  }
}




// THUNKS


export function getAllGiftBoxesThunk () {
  return (dispatch) => {
    fetchAllGiftBoxes() //API call
      .then(giftBoxes => {
        dispatch(showAllGiftBoxesAction(giftBoxes)) //ACTION call
      })
      .catch(err => {console.log(err.message)})
  }
}


export function addGiftBoxesThunk (giftBox) {
  return (dispatch) => {
    addGiftBoxToCart(giftBox) //API call
      .then((everythingIsFine) => {
        if (!everythingIsFine) {
          throw new Error('oops')
        }

        dispatch(addGiftBoxAction(giftBox)) //ACTION call
      })
      .catch(err => { console.log(err.message)})
  }
}





export function deleteGiftBoxThunk (id ) {
  return(dispatch) => {
    deleteGiftBoxFromCart(id) //API call
    .then(() => {
      dispatch(deleteGiftBoxAction(id)) //ACTION call
      })
    .catch(err => {console.log(err.message)})

  }
}

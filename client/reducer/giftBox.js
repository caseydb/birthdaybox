import { SHOW_ALL_GIFTBOXES, ADD_GIFTBOXES_TO_CART, DELETE_GIFTBOXES_FROM_CART} from '../actions/giftBox' 



function giftBoxReducer (state = [], action) {
  switch (action.type) {
    case SHOW_ALL_GIFTBOXES:
        return action.giftBoxes
    case ADD_GIFTBOXES_TO_CART:
        if(state.some(item => item.id === action.id)){
          return state.map(item => ({
            id: giftItem.id,
            giftItem: item.giftItem,
            quantity: item.id === action.id ? item.quantity + 1 :1
        }))
      }
        return [...state,
          {id: action.id,
          giftItem: action.giftItem,
          quantity: 1
        }]
    // case DELETE_GIFTBOXES_FROM_CART:
    //   return state.filter(eachRecipient => eachRecipient.id  !== action.id) //return everything that doesn't match id
      default:
        return state
  }
}

export default giftBoxReducer
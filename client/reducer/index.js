import { combineReducers } from 'redux'

// import recipientReducer from './recipient'
import recipient from './recipient'
import giftBox from './giftBox'
import login from './login'
import cart from './cart'


export default combineReducers({
  recipient,
  giftBox,
  cart,
  login
})